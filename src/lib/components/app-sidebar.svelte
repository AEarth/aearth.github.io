<script lang="ts" module>
	import AudioWaveformIcon from '@lucide/svelte/icons/audio-waveform';
	import BookOpenIcon from '@lucide/svelte/icons/book-open';
	import BotIcon from '@lucide/svelte/icons/bot';
	import ChartPieIcon from '@lucide/svelte/icons/chart-pie';
	import CommandIcon from '@lucide/svelte/icons/command';
	import FrameIcon from '@lucide/svelte/icons/frame';
	import GalleryVerticalEndIcon from '@lucide/svelte/icons/gallery-vertical-end';
	import MapIcon from '@lucide/svelte/icons/map';
	import Settings2Icon from '@lucide/svelte/icons/settings-2';
	import SquareTerminalIcon from '@lucide/svelte/icons/square-terminal';
	import CatIcon from '@lucide/svelte/icons/cat';
	import BookCheckIcon from '@lucide/svelte/icons/book-check';

	// This is sample data.
	const data = {
		teams: [
			{
				name: 'Arthur Kay',
				logo: GalleryVerticalEndIcon,
				plan: 'Portfolio'
			},
			{
				name: 'LinkedIn',
				logo: BookCheckIcon,
				plan: 'Portfolio',
				url: 'https://www.linkedin.com/in/arthur-kay'
			},
			{
				name: 'GitHub',
				logo: CatIcon,
				plan: 'Portfolio',
				url: 'https://github.com/aearth'
			}
		],
		navMain: [
			{
				title: 'Web Dev',
				url: '/web-dev',
				icon: SquareTerminalIcon,
				isActive: false,
				items: [
					{
						title: 'teramap.org',
						url: '/full-stack#teramap'
					},
					{
						title: 'share-more.org',
						url: '/full-stack#share-more'
					},
					{
						title: 'stormwater',
						url: '/full-stack#stormwater'
					}
				]
			},
			{
				title: 'Geospatial',
				url: '/geospatial',
				icon: BotIcon,
				items: [
					{
						title: 'Watershed Characterization Tool',
						url: '/geospatial'
					},
					{
						title: 'Enhanced Floodplain Maps',
						url: '#'
					},
					{
						title: 'VA Flood Risk Info System',
						url: '#'
					},
					{
						title: 'Coastal Resilience Web Explorer',
						url: '#'
					}
				]
			},
			{
				title: 'Resume',
				url: '#',
				icon: BookOpenIcon
			},
			{
				title: 'Community',
				url: '/community',
				icon: Settings2Icon,
				items: [
					{
						title: 'Createspace',
						url: '#'
					},
					{
						title: 'Carverponics',
						url: '#'
					},
					{
						title: 'Food not Bombs',
						url: '#'
					}
				]
			}
		]
	};
</script>

<script lang="ts">
	import NavMain from './nav-main.svelte';
	import NavProjects from './nav-projects.svelte';
	import NavUser from './nav-user.svelte';
	import TeamSwitcher from './team-switcher.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import type { ComponentProps } from 'svelte';

	let {
		ref = $bindable(null),
		collapsible = 'icon',
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref {collapsible} {...restProps}>
	<Sidebar.Header>
		<TeamSwitcher teams={data.teams} />
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={data.navMain} />
		<NavProjects projects={data.projects} />
	</Sidebar.Content>

	<Sidebar.Rail />
</Sidebar.Root>
