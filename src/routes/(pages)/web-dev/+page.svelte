<script lang="ts">
	import { base } from '$app/paths';

	import { Button } from '$lib/components/ui/button';

	import { Map, Database, Code, MousePointerClick, Ship } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';

	let { message, user, timestamp } = $props();
</script>

<h1
	class="text-sma mt-10 bg-linear-to-r from-background to-foreground/40 bg-clip-text text-center text-3xl font-black tracking-widest text-transparent uppercase"
	id="title"
>
	Web Dev
</h1>
<h2
	class="bg-gradient-to-r from-foreground via-foreground/60 to-foreground/30 bg-clip-text text-center text-xl tracking-widest text-transparent [font-variant-caps:small-caps]"
	id="title"
>
	Projects
</h2>

<div id="teramap" class="section p-4 transition-all hover:bg-muted/40 hover:ring-border">
	<h1 class="text-2xl" id="teramap">teramap.org</h1>
	<div>
		<div class="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
			<div
				class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"
			></div>
			<header
				class="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2"
				aria-label="2025 — 2026"
			>
				2025 — 2026
			</header>
			<div class="z-10 sm:col-span-6">
				<h3 class="leading-snug font-medium text-slate-200">
					<div>
						<a
							class="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200"
							href="https://www.teramap.org"
							target="_blank"
							rel="noreferrer noopener"
							aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
							><span
								class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
							></span><span
								>Full Stack Geospatial Web Application ·<!-- -->
								<span class="inline-block"
									>AWS<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										class="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none"
										aria-hidden="true"
										><path
											fill-rule="evenodd"
											d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
											clip-rule="evenodd"
										></path></svg
									></span
								></span
							></a
						>
					</div>
				</h3>
				<p class="mt-2 text-sm leading-normal">
					Designed, built, and maintained a full stack geospatial application with background jobs,
					operational emails, user registration, and a global user base.
				</p>
			</div>
		</div>
	</div>
	<!-- stack details section -->
	<div class="mt-6 grid grid-cols-4 text-foreground/65 md:grid-cols-8">
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Database class="size-7" />
				PostgreSQL
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Code class="size-7" />
				Python/Django
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<MousePointerClick class="size-7" />
				Svelte
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Ship class="size-7" />
				Docker
			</span>
		</div>
	</div>
</div>

<div id="share-more" class="section mt-12 p-4 transition-all hover:bg-muted/40 hover:ring-border">
	<h1 class="text-2xl" id="share-more">share-more.org</h1>
	<div>
		<div class="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
			<div
				class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"
			></div>
			<header
				class="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2"
				aria-label="2025 — 2026"
			>
				2025 — 2026
			</header>
			<div class="z-10 sm:col-span-6">
				<h3 class="leading-snug font-medium text-slate-200">
					<div>
						<a
							class="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200"
							href="https://www.share-more.org"
							target="_blank"
							rel="noreferrer noopener"
							aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
							><span
								class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
							></span><span
								>Full Stack Geospatial Web Application ·<!-- -->
								<span class="inline-block"
									>AWS<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										class="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none"
										aria-hidden="true"
										><path
											fill-rule="evenodd"
											d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
											clip-rule="evenodd"
										></path></svg
									></span
								></span
							></a
						>
					</div>
				</h3>
				<p class="mt-2 text-sm leading-normal">
					Designed, built, and maintained a full stack geospatial application with background jobs,
					operational emails, user registration, and a global user base.
				</p>
			</div>
		</div>
	</div>
	<!-- stack details section -->
	<div class="mt-6 grid grid-cols-4 text-foreground/65 md:grid-cols-8">
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Database class="size-7" />
				PostgreSQL
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Code class="size-7" />
				Python/Django
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<MousePointerClick class="size-7" />
				HTMX/Alpine
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Ship class="size-7" />
				Heroku
			</span>
		</div>
	</div>
</div>
<div id="share-more" class="section">
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />

	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />

	<br />
	<br />
</div>

<h1 id="stormwater">stormwater</h1>
<div id="stormwater" class="section">
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />

	<br />
	<br />

	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />

	<br />
	<br />

	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />

	<br />
	<br />
</div>
