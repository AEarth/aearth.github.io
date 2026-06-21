<script lang="ts">
	import { base } from '$app/paths';

	import { Button } from '$lib/components/ui/button';

	import { Map, Database, Code, MousePointerClick, Ship } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
	import Teramap2 from '$lib/assets/images/teramap-2.png';
	import Sharemore from '$lib/assets/images/share-more.png';
	import Stormwater from '$lib/assets/images/stormwater.png';

	let { message, user, timestamp } = $props();
</script>

<header class="mt-12 mb-12 text-center">
	<h1 class="text-4xl font-semibold tracking-tight text-foreground">Web Dev</h1>
	<p class="-mt-1 text-sm font-medium tracking-[0.25em] text-muted-foreground uppercase">
		Projects
	</p>
</header>

<div id="teramap" class="section p-4 transition-all hover:bg-muted/20 hover:ring-border">
	<h2 class="mb-2 flex items-center gap-2 text-xl font-medium tracking-tight text-foreground">
		teramap.org
	</h2>
	<!-- <hr class="double mb-2 w-128 border-1 border-accent border-b-cyan-800" /> -->

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
							><span
								class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
							></span><span
								>Full Stack Geospatial Web Application ·<!-- -->
								<span class="inline-block"
									>Visit<svg
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
					Designed, built, and maintained a web application with background jobs, operational
					emails, user registration, and a global user base. Features include a massive plant
					species database, global climate zone lookups, the ability for users to generate contour
					maps and draw, store, modify, and retrieve user created asset data.
				</p>
			</div>
		</div>
	</div>
	<!-- stack details section -->
	<div
		class="mt-6 grid grid-cols-4 flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/70 md:grid-cols-8"
	>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Database class="size-7 text-muted-foreground" />
				PostgreSQL
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Code class="size-7 text-muted-foreground" />
				Python/Django
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<MousePointerClick class="size-7 text-muted-foreground" />
				Svelte
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Ship class="size-7 text-muted-foreground" />
				Docker/AWS EC2
			</span>
		</div>
	</div>

	<!-- Teramap Hero image -->
	<div class="my-10 w-full max-w-4xl">
		<div class="mask-y-from-95% mask-y-to-100% mask-x-from-95% mask-x-to-100%">
			<!-- Banner Image with Overlay -->
			<div class="relative w-full">
				<img
					src={Teramap2}
					alt="Teramap Banner"
					class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-101 md:h-64"
				/>
				<div class="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent"></div>
			</div>
		</div>
	</div>
</div>

<div id="share-more" class="section mt-12 p-4 transition-all hover:bg-muted/20 hover:ring-border">
	<h2 class="mb-2 flex items-center gap-2 text-xl font-medium tracking-tight text-foreground">
		share-more.org
	</h2>
	<div>
		<div class="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
			<div
				class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"
			></div>
			<header
				class="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2"
				aria-label="2025 — 2026"
			>
				2023 — 2024
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
								>Full Stack Web Application ·<!-- -->
								<span class="inline-block"
									>Visit<svg
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
					Mobile first designed tool lending library that includes user profiles, FSM workflow
					supporting a user-to-user decentralized system for requesting and accepting tool rentals,
					and an in-app bell notification system. More recent additions includes items generating
					unique QR code to support real-world validation.
				</p>
			</div>
		</div>
	</div>
	<!-- stack details section -->
	<div
		class="mt-6 grid grid-cols-4 flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/70 md:grid-cols-8"
	>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Database class="size-7 text-muted-foreground" />
				PostgreSQL
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Code class="size-7 text-muted-foreground" />
				Python/Django
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<MousePointerClick class="size-7 text-muted-foreground" />
				HTMX/AlpineJS
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Ship class="size-7 text-muted-foreground" />
				Heroku
			</span>
		</div>
	</div>
	<!-- Teramap Hero image -->
	<div class="my-10 w-full max-w-4xl">
		<!-- Banner Image with Overlay -->
		<div class="w-500px relative justify-items-center">
			<div class="mask-y-from-95% mask-y-to-100% mask-x-from-95% mask-x-to-100%">
				<img
					src={Sharemore}
					alt="Sharemore"
					class="h-48 object-cover transition-transform duration-500 group-hover:scale-101 md:h-64"
				/>
			</div>
		</div>
	</div>
</div>

<div
	id="landcover-stormwater"
	class="section mt-12 p-4 transition-all hover:bg-muted/20 hover:ring-border"
>
	<h2 class="mb-2 flex items-center gap-2 text-xl font-medium tracking-tight text-foreground">
		Richmond Landcover & Stormwater
	</h2>
	<div>
		<div class="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
			<div
				class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"
			></div>
			<header
				class="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2"
				aria-label="2025 — 2026"
			>
				2015
			</header>
			<div class="z-10 sm:col-span-6">
				<h3 class="leading-snug font-medium text-slate-200">
					<div>
						<a
							class="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200"
							href="https://richmondlandscape.azurewebsites.net/"
							target="_blank"
							rel="noreferrer noopener"
							aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
							><span
								class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
							></span><span
								>Custom Web Mapping Application ·<!-- -->
								<span class="inline-block"
									>Visit<svg
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
					Developed a custom tile basemap with QGIS utilizing over 17 layers including 1m land
					cover, transportation, and property data. It is a visually appealing tool for homeowners,
					environmental, and stormwater planners for the city of Richmond to estimate out the
					stormwater runoff and nutrient loads of properties in Richmond.
				</p>
			</div>
		</div>
	</div>
	<!-- stack details section -->
	<div
		class="mt-6 grid grid-cols-4 flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/70 md:grid-cols-8"
	>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Database class="size-7 text-muted-foreground" />
				Carto
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Code class="size-7 text-muted-foreground" />
				HTML/CSS
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<MousePointerClick class="size-7 text-muted-foreground" />
				Vanilla JS
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Ship class="size-7 text-muted-foreground" />
				AWS S3
			</span>
		</div>
	</div>
	<!-- Teramap Hero image -->
	<div class="my-10 w-full max-w-4xl">
		<div class="mask-y-from-95% mask-y-to-100% mask-x-from-95% mask-x-to-100%">
			<!-- Banner Image with Overlay -->
			<div class="relative w-full">
				<img
					src={Stormwater}
					alt="Stormwater"
					class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-101 md:h-64"
				/>
				<div class="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent"></div>
			</div>
		</div>
	</div>
</div>
