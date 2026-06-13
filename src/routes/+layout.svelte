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



    let { children } = $props();

    // Help convert URL segment slugs to readable titles
    function formatSegment(segment: string): string {
        const mapping: Record<string, string> = {
            'full-stack': 'Full Stack',
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

</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<ModeWatcher />



<Sidebar.Provider>
    <AppSidebar />
    <Sidebar.Inset>
        <header
            class="sticky top-0 z-30 bg-card/60 h-12 shrink-0 flex shrink-0 items-center justify-between gap-2 px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
        >
            <div class="flex items-center gap-2">
                <Sidebar.Trigger class="-ms-1" />
                <Separator orientation="vertical" class="me-2 data-[orientation=vertical]:h-4" />
                <Breadcrumb.Root>
                    <Breadcrumb.List>
                        <Breadcrumb.Item class="hidden md:block">
                            <Breadcrumb.Link href="##">{breadcrumbs[0]?.label}</Breadcrumb.Link>
                        </Breadcrumb.Item>
						{#if breadcrumbs[1]}
                        <Breadcrumb.Separator class="hidden md:block" />
                        <Breadcrumb.Item>
                            <Breadcrumb.Page>{breadcrumbs[1]?.label}</Breadcrumb.Page>
                        </Breadcrumb.Item>
						{/if}
                    </Breadcrumb.List>
                </Breadcrumb.Root>
            </div>

            <ModeToggle />
        </header>
		<div class="py-2"> 
			<h1>{breadcrumbs.label}</h1>
		</div>


        {@render children()}
    </Sidebar.Inset>
</Sidebar.Provider>