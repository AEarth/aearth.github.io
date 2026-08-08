<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { useSidebar } from '$lib/components/ui/sidebar/context.svelte.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import FileDownIcon from '@lucide/svelte/icons/file-down';
	import EllipsisIcon from '@lucide/svelte/icons/ellipsis';
	import FolderIcon from '@lucide/svelte/icons/folder';
	import ForwardIcon from '@lucide/svelte/icons/forward';
	import Trash2Icon from '@lucide/svelte/icons/trash-2';

	let {
		projects
	}: {
		projects: {
			name: string;
			url: string;
			// This should be `Component` after @lucide/svelte updates types
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			icon: any;
		}[];
	} = $props();

	const sidebar = useSidebar();
</script>

<Sidebar.Group class="group-data-[collapsible=icon]:hidden">
	<Sidebar.GroupLabel>Resume</Sidebar.GroupLabel>
	<Sidebar.Menu>
		<Sidebar.MenuItem>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<Sidebar.MenuButton class="text-sidebar-foreground/70">
						<FileDownIcon class="text-sidebar-foreground/70" />
						<span>Download</span>
					</Sidebar.MenuButton>
				</DropdownMenu.Trigger>

				<DropdownMenu.Content
					side={sidebar.isMobile ? 'bottom' : 'right'}
					align="start"
					class="w-48"
				>
					<DropdownMenu.Item>
						<a
							href="https://drive.google.com/file/d/1Z0zjfrUKB1VzYz5Wt7BkQlxQIXa71ylT/view?usp=drive_link"
							target="_blank"
							rel="noopener noreferrer">Download PDF</a
						>
					</DropdownMenu.Item>

					<!-- <DropdownMenu.Item href="/resume.docx" download>
						<span>Download Word file</span>
					</DropdownMenu.Item> -->
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</Sidebar.MenuItem>
	</Sidebar.Menu>
</Sidebar.Group>
