<script lang="ts">
	import { getContext, onMount, onDestroy } from 'svelte';
	let { children } = $props();

	interface ActiveSectionContext {
		current: string;
	}

	const activeSection = getContext<ActiveSectionContext>('activeSection');

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeSection.current = entry.target.id;
					}
				}
			},
			{
				// Triggers when the section crosses into the upper-middle of the screen
				rootMargin: '-20% 0px -60% 0px',
				threshold: 0
			}
		);

		// Query and observe all divs with the "section" class dynamically
		const sections = document.querySelectorAll('div.section');
		sections.forEach((section) => observer.observe(section));

		// Clean up the observer on component unmount
		return () => observer.disconnect();
	});

	onDestroy(() => {
		if (activeSection) {
			activeSection.current = '';
		}
	});
	$inspect(activeSection);
</script>

<main>
	{@render children()}
</main>
