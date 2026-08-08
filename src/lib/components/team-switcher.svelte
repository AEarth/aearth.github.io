<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	import LinkIcon from '@lucide/svelte/icons/link';
	import PlusIcon from '@lucide/svelte/icons/plus';

	// This should be `Component` after @lucide/svelte updates types
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let { teams }: { teams: { name: string; logo: any; plan: string; url?: string }[] } = $props();
	const sidebar = useSidebar();

	// svelte-ignore state_referenced_locally
	let activeTeam = $state(teams[0]);
</script>

<Sidebar.Menu>
	<Sidebar.MenuItem>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Sidebar.MenuButton
						{...props}
						size="lg"
						class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
					>
						<div
							class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
						>
							<activeTeam.logo class="size-4" />
						</div>
						<div class="grid flex-1 text-start text-sm leading-tight">
							<span class="truncate font-medium">
								{activeTeam.name}
							</span>
							<span class="truncate text-xs">{activeTeam.plan}</span>
						</div>
						<LinkIcon class="ms-auto" />
					</Sidebar.MenuButton>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				class="w-(--bits-dropdown-menu-anchor-width) min-w-56 rounded-lg"
				align="start"
				side={sidebar.isMobile ? 'bottom' : 'right'}
				sideOffset={4}
			>
				<DropdownMenu.Label class=" text-xs text-muted-foreground">Links</DropdownMenu.Label>
				{#each teams.slice(1) as team, index (team.name)}
					<a href={team.url ?? '#'} target="_blank" rel="noopener noreferrer">
						<DropdownMenu.Item class="cursor-pointer gap-2 p-2">
							<div class="flex size-6 items-center justify-center rounded-md border">
								<team.logo class="size-3.5 shrink-0" />
							</div>

							{team.name}
						</DropdownMenu.Item>
					</a>
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Sidebar.MenuItem>
</Sidebar.Menu>
