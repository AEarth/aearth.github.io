<script lang="ts">
	import HomeBanner from '$lib/assets/images/home-banner.jpg';
	import SWVAMap from '$lib/assets/images/swva-map.png';
	import Carverponics from '$lib/assets/images/carverponics.png';
	import GrafanaImg from '$lib/assets/images/grafana-img.png';
	import { Badge } from '$lib/components/ui/badge';
	import { Map, Cog, Download, Palette } from '@lucide/svelte';
</script>

<div class="flex min-h-full flex-col gap-4 overflow-y-auto md:h-full md:overflow-hidden md:p-2">
	<!-- flex-[2] makes this box take up 2 portions -->
	<a
		href="/full-stack"
		class="flex-2 rounded-xl bg-muted/50 ring-1 ring-transparent transition-all duration-300 hover:bg-muted/40 hover:ring-border"
	>
		<!-- Content Section -->
		<div class="relative z-10 px-2 md:px-8">
			<!-- Title -->
			<h1 class="m-2 flex justify-start pt-2 text-xl text-muted-foreground md:text-2xl">
				Full Stack
			</h1>
			<div class="flex flex-col items-center justify-center">
				<div class="w-full max-w-4xl">
					<div class="mask-y-from-95% mask-y-to-100% mask-x-from-95% mask-x-to-100%">
						<!-- Banner Image with Overlay -->
						<div class="relative w-full">
							<img
								src={HomeBanner}
								alt="Teramap Banner"
								class="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-101 md:h-48"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent"
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Feature Pills -->
		<div class="mb-2 flex flex-wrap justify-center gap-2 pt-1">
			<Badge variant="outline">
				<Map class="h-3.5 w-3.5" />
				PostgreSQL
			</Badge>
			<Badge variant="outline">
				<Cog class="h-3.5 w-3.5" />
				Svelte
			</Badge>
			<Badge variant="outline">
				<Download class="h-3.5 w-3.5" />
				Tailwind CSS
			</Badge>
			<Badge variant="outline">
				<Palette class="h-3.5 w-3.5" />
				Python / Django
			</Badge>
		</div>
		<div class="p-3 text-center text-muted-foreground">
			<p class="text-left text-sm md:text-base">
				Developed, deployed, and maintained several full stack applications, with advanced features
				such as background jobs, database backups, and test/pre-prod/prod deployment management.
			</p>
			<div class=" grid grid-cols-2 text-sm md:text-base">
				<ul class="mt-3 ml-8 text-left text-xs md:text-sm">
					<li>
						• <b>Docker Compose</b> for development, testing, staging, and deployment to AWS EC2 instances.
					</li>
					<li>
						• <b>Python / Django</b> for database migration ORM design, backend development, and API creation.
					</li>
					<li>
						• <b>Prometheus & Grafana</b> for monitoring route requests and visualizing response performance.
					</li>
				</ul>
				<img
					src={GrafanaImg}
					class="mx-auto w-64 rounded-2xl mask-y-from-90% mask-y-to-100% mask-x-from-90% mask-x-to-100% shadow-xl"
					alt="Grafana Screenshot"
				/>
			</div>
		</div></a
	>

	<div class="grid flex-1 grid-cols-3 gap-2 md:gap-4">
		<a
			href="/geospatial"
			class="group flex flex-col overflow-hidden rounded-xl bg-muted/50 ring-1 ring-transparent transition-all duration-300 hover:bg-muted/40 hover:ring-border"
		>
			<h1 class="mx-3 flex justify-start pt-2 text-lg text-muted-foreground md:text-xl">
				Geospatial
			</h1>
			<div class="mt-2 w-full overflow-hidden rounded-b-xl">
				<img
					src={SWVAMap}
					alt="Geospatial map"
					class="h-32 w-full mask-y-from-80% mask-y-to-90% mask-x-from-90% mask-x-to-95% object-cover transition-transform duration-500 group-hover:scale-101 md:h-44"
				/>
			</div>
		</a>
		<a
			href="/landscape"
			class="group flex flex-col overflow-hidden rounded-xl bg-muted/50 ring-1 ring-transparent transition-all duration-300 hover:bg-muted/40 hover:ring-border"
		>
			<h1 class="mx-3 flex justify-start pt-2 text-lg text-muted-foreground md:text-xl">
				Landscape
			</h1>
			<div class="mt-2 w-full overflow-hidden rounded-b-xl">
				<img
					src={Carverponics}
					alt="Landscape aquaponics"
					class="h-32 w-full mask-y-from-80% mask-y-to-90% mask-x-from-90% mask-x-to-95% object-cover transition-transform duration-500 group-hover:scale-101 md:h-44"
				/>
			</div>
		</a>
		<a
			href="/community"
			class="group flex flex-col overflow-hidden rounded-xl bg-muted/50 ring-1 ring-transparent transition-all duration-300 hover:bg-muted/40 hover:ring-border"
		>
			<h1 class="mx-3 flex justify-start pt-2 text-lg text-muted-foreground md:text-xl">
				Community
			</h1>
		</a>
	</div>
</div>
