<script lang="ts">
    import './layout.css';
    import favicon from '$lib/assets/favicon.svg';
    import AppSidebar from '$lib/components/app-sidebar.svelte';
    import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
    import { Separator } from '$lib/components/ui/separator/index.js';
    import * as Sidebar from '$lib/components/ui/sidebar/index.js';
    import { ModeWatcher } from "mode-watcher";
    import ModeToggle from '$lib/components/mode-toggle.svelte';
    import { page } from '$app/state';
    import {setContext} from 'svelte'; 



    let { children } = $props();

    // Help convert URL segment slugs to readable titles
    function formatSegment(segment: string): string {
        const mapping: Record<string, string> = {
            'web-dev': 'Web Dev',
            'geospatial': 'Geospatial'
            
        };

        if (mapping[segment]) return mapping[segment];

        // Fallback: capitalize and replace dashes with spaces
        return segment
            .replace(/[-_]+/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());
    }

    // Dynamically compute breadcrumbs when page.url.pathname changes
    let breadcrumbs = $derived.by(() => {
        const segments = page.url.pathname.split('/').filter(Boolean);
        let currentPath = '';

        return segments.map((segment) => {
            currentPath += `/${segment}`;
            return {
                label: formatSegment(segment),
                href: currentPath
            };
        });
    });

$inspect(breadcrumbs?);
$inspect(breadcrumbs[0]?.href);


    class ActiveSectionState {
        current = $state('');
    }
    const activeSection = setContext('activeSection', new ActiveSectionState());



</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<ModeWatcher />

<Sidebar.Provider>
	<AppSidebar />
	<!-- Added flex, flex-col, and h-screen to fill the viewport -->
	<Sidebar.Inset class="flex h-screen flex-col overflow-hidden">
		<header
			class="sticky top-0 z-30 flex h-12 shrink-0 items-center justify-between gap-2 border-b-1 bg-card/60 px-4 shadow-lg transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
		>
			<div class="flex items-center gap-2">
				<Sidebar.Trigger class="-ms-1" />
				<Separator orientation="vertical" class="me-2 data-[orientation=vertical]:h-4" />
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item>
							<Breadcrumb.Link href="#top">{breadcrumbs[0]?.label}</Breadcrumb.Link>
						</Breadcrumb.Item>
						{#if activeSection.current}
							<Breadcrumb.Separator />
							<Breadcrumb.Item>
								<Breadcrumb.Link href="{breadcrumbs[0]?.href}/#{activeSection.current}">
									{activeSection.current}
								</Breadcrumb.Link>
							</Breadcrumb.Item>
						{/if}
					</Breadcrumb.List>
				</Breadcrumb.Root>
			</div>

			<ModeToggle />
		</header>

		<!-- Keep breadcrumb title but ensure it doesn't push content off screen
		<div class="shrink-0 px-4 py-2">
			<h1 class="text-xl font-bold">{breadcrumbs[breadcrumbs.length - 1]?.label || 'Home'}</h1>
		</div> -->

		<!-- Use flex-1 to let the page content fill the remaining space -->
		<main class="flex-1 overflow-y-auto scroll-smooth">
			<h1 id="top"> </h1>
			{@render children()}
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>
