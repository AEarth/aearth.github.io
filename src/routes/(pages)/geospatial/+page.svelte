<script lang="ts">
	import { base } from '$app/paths';

	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/Card';
	import SWVA from '$lib/assets/images/swva-map.png';
	import SWVALegend from '$lib/assets/images/swva-map-legend2.png';
	import SLISSeries from '$lib/assets/images/slis-elev.png';
	import SLISElevation from '$lib/assets/images/slis-series.png';

	import {
		Map,
		Database,
		Code,
		MousePointerClick,
		Ship,
		Earth,
		ChartColumn,
		Kanban
	} from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
	import WCTMaps from '$lib/assets/images/wct-maps.gif';
	import WCTCharts from '$lib/assets/images/wct-charts.gif';

	let { message, user, timestamp } = $props();
</script>

<header class="mt-12 mb-12 text-center">
	<h1 class="text-4xl font-semibold tracking-tight text-foreground">GEOSPATIAL</h1>
	<p class="-mt-1 text-sm font-medium tracking-[0.25em] text-muted-foreground uppercase">
		Projects
	</p>
</header>

<Card id="WCT" class="section mx-3 my-6 bg-card/60 p-4 md:mx-4 ">
	<h2 class="mb-2 flex items-center gap-2 text-xl font-medium tracking-tight text-foreground">
		Watershed Characterization Tool
	</h2>
	<!-- <hr class="double mb-2 w-128 border-1 border-accent border-b-cyan-800" /> -->

	<div class="transition-all">
		<div class="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
			<div
				class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"
			></div>
			<header
				class="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2"
				aria-label="2025 — 2026"
			>
				2025
			</header>
			<div class="z-10 sm:col-span-6">
				<h3 class="leading-snug font-medium">
					<div>
						<a
							class="group/link inline-flex items-baseline text-base leading-tight font-medium"
							href="https://www.teramap.org"
							target="_blank"
							rel="noreferrer noopener"
							><span
								class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
							></span><span
								>Custom ArcGIS Geoprocessing Toolbox ·<!-- -->
								<span class="inline-block"
									>Github<svg
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
					Developed a custom geoprocessing toolbox of 9 distinct tools for performing Watershed
					Characterizations by DEQ's TMDL program that automates GIS analysis and synthesis of
					charts, maps, and data tables. Toolbox modules include watershed delineation, stream
					network, topographic, soils, landcover, population, and climate analysis.
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
				<Earth class="size-7 text-muted-foreground" />
				ArcGIS / Arcpy
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Code class="size-7 text-muted-foreground" />
				Python
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Kanban class="size-7 text-muted-foreground" />
				Pandas
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<ChartColumn class="size-7 text-muted-foreground" />
				Matplotlib
			</span>
		</div>
	</div>

	<!-- Teramap Hero image -->
	<div class="mx-auto my-10 w-full max-w-7xl">
		<div
			class="grid grid-cols-1 gap-4 mask-y-from-95% mask-y-to-100% mask-x-from-95% mask-x-to-100% md:grid-cols-2"
		>
			<!-- Banner Image with Overlay -->
			<div class="relative w-full">
				<img
					src={WCTMaps}
					alt="Teramap Banner"
					class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-101 md:h-72"
				/>
				<div class="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent"></div>
			</div>
			<div class="relative w-full">
				<img
					src={WCTCharts}
					alt="Teramap Banner"
					class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-101 md:h-72"
				/>
				<div class="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent"></div>
			</div>
		</div>
	</div>
</Card>

<Card id="SWVA" class="section mx-3 my-6 bg-card/60 p-4 md:mx-4 ">
	<h2 class="mb-2 flex items-center gap-2 text-xl font-medium tracking-tight text-foreground">
		Hurricane Helene SWVA Maps
	</h2>
	<!-- <hr class="double mb-2 w-128 border-1 border-accent border-b-cyan-800" /> -->

	<div class="transition-all">
		<div class="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
			<div
				class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"
			></div>
			<header
				class="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2"
				aria-label="2025 — 2026"
			>
				2025
			</header>
			<div class="z-10 sm:col-span-6">
				<h3 class="leading-snug font-medium">
					<div>
						<a
							class="group/link inline-flex items-baseline text-base leading-tight font-medium"
							href="https://www.teramap.org"
							target="_blank"
							rel="noreferrer noopener"
							><span
								class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
							></span><span
								>Advanced Geospatial Analysis & Cartography<!-- -->
								<span class="inline-block"
									><svg
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
					Developed enhanced floodplain maps (large format - 24”x36”) by combining multiple flood
					hazard datasets (FEMA & FATHOM) to provide significantly more comprehensive maps for
					Hurricane Helene recovery planning. Analysis demonstrated approximately twice the flood
					risk due including areas previously unmapped by FEMA maps alone. The map series included
					index cover pages for 8 localities and 200 individual map panels, complete with data
					driven dynamic text, charts, and tables on each panel. Maps were printed and mailed to
					Mount Rogers PDC planning staff in addition to adding a FATHOM flood hazard layer to the
					state's floodplain mapping tool, VFRIS.
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
				<Earth class="size-7 text-muted-foreground" />
				ArcGIS / Arcpy
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Code class="size-7 text-muted-foreground" />
				Python
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<Kanban class="size-7 text-muted-foreground" />
				Pandas
			</span>
		</div>
		<div class="col-span-2">
			<span class="inline-flex items-center gap-2">
				<ChartColumn class="size-7 text-muted-foreground" />
				Matplotlib
			</span>
		</div>
	</div>

	<!-- Teramap Hero image -->
	<div class="mx-auto my-10 w-full max-w-7xl">
		<div
			class="grid grid-cols-1 gap-4 mask-y-from-95% mask-y-to-100% mask-x-from-95% mask-x-to-100% md:grid-cols-2"
		>
			<!-- Banner Image with Overlay -->
			<div class="relative w-full">
				<img
					src={SWVA}
					alt="Teramap Banner"
					class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-101 md:h-172"
				/>
				<div class="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent"></div>
			</div>
			<div class="relative w-full">
				<img
					src={SWVALegend}
					alt="Teramap Banner"
					class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-101 md:h-172"
				/>
				<div class="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent"></div>
			</div>
		</div>
	</div>
</Card>

<Card id="flood-modeling" class="section m-4 bg-card/60 p-4 ">
	<h2 class="mb-2 flex items-center gap-2 text-xl font-medium tracking-tight text-foreground">
		Dam Breach Flood Modeling and Impact Assessment Tool
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
				<h3 class="leading-snug font-medium">
					<div>
						<a
							class="group/link inline-flex items-baseline text-base leading-tight font-medium"
							href="https://github.com/AEarth/SLIS-Toolbox"
							target="_blank"
							rel="noreferrer noopener"
							aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
							><span
								class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
							></span><span
								>Custom ArcGIS Pro Geoprocessing Toolbox ·<!-- -->
								<span class="inline-block"
									>Github<svg
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
					Developed and trained staff on use of custom geospatial automation tools written in python
					that incorporated statewide elevation, landcover, roads, bridges/culverts, and building
					footprint data for hydrologic, hydraulic, and inundation impact analysis. The tool
					includes advanced cartographic automation for streamlining production of dam break
					inundation maps by dam safety engineering staff.
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
	<div class="mx-auto my-10 w-full max-w-7xl">
		<div
			class="grid grid-cols-1 gap-4 mask-y-from-95% mask-y-to-100% mask-x-from-95% mask-x-to-100% md:grid-cols-2"
		>
			<!-- Banner Image with Overlay -->
			<div class="relative w-full">
				<img
					src={SLISSeries}
					alt="Teramap Banner"
					class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-101 md:h-96"
				/>
				<div class="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent"></div>
			</div>
			<div class="relative w-full">
				<img
					src={SLISElevation}
					alt="Teramap Banner"
					class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-101 md:h-96"
				/>
				<div class="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent"></div>
			</div>
		</div>
	</div>
</Card>
