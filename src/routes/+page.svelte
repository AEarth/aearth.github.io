<script lang="ts">
	import HomeBanner from '$lib/assets/images/home-banner.jpg';
	import SWVAMap from '$lib/assets/images/swva-map.png';
	import Carverponics from '$lib/assets/images/carverponics.png';
	import GrafanaImg from '$lib/assets/images/grafana-img.png';
	import { Badge } from '$lib/components/ui/badge';
	import { Map, Cog, Download, Palette } from '@lucide/svelte';
	import { abort } from 'process';
</script>

<div class="flex min-h-full flex-col gap-4 overflow-y-auto md:h-full md:overflow-hidden md:p-2">
	<!-- flex-[2] makes this box take up 2 portions -->
	<a href="/full-stack" class="flex-2 rounded-xl bg-muted/50">
		<!-- Content Section -->
		<div class="relative z-10 px-2 md:px-8">
			<!-- Title -->
			<h1 class="m-2 flex justify-start pt-2 text-xl text-muted-foreground md:text-2xl">
				Full Stack
			</h1>
			<div class="flex flex-col items-center justify-center">
				<div class="w-full max-w-4xl">
					<div class="overflow-hidden rounded-2xl border bg-card shadow-2xl">
						<!-- Banner Image with Overlay -->
						<div class="relative w-full">
							<img src={HomeBanner} alt="Teramap Banner" class="h-36 w-full object-cover md:h-48" />
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
					class="mx-auto mt-4 w-64 rounded-2xl border bg-card shadow-2xl"
					alt="Grafana Screenshot"
				/>
			</div>
		</div></a
	>

	<div class="grid flex-1 grid-cols-3 gap-2 md:gap-4">
		<a href="/geospatial" class="rounded-xl bg-muted/50"
			><h1 class="m-1 mx-2 flex justify-start pt-2 text-lg text-muted-foreground md:text-xl">
				Geospatial
			</h1>
			<div class="relative w-full">
				<img src={SWVAMap} alt="Teramap Banner" class="h-36 w-full object-cover md:h-48" />
				<div class="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent"></div>
			</div></a
		>
		<a href="/resume" class="rounded-xl bg-muted/50"
			><h1 class="mx-2 flex justify-start pt-2 text-lg text-muted-foreground md:text-xl">
				Landscape
			</h1>
			<img src={Carverponics} alt="Teramap Banner" class="h-36 w-full object-cover md:h-48" /></a
		>
		<a href="/community" class="rounded-xl bg-muted/50">
			<h1 class="m-1 mx-2 flex justify-start pt-2 text-lg text-muted-foreground md:text-xl">
				Resume
			</h1></a
		>
	</div>
</div>
