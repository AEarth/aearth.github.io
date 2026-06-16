<script lang="ts">
	import HomeBanner from '$lib/assets/images/home-banner.jpg';
	import GrafanaImg from '$lib/assets/images/grafana-img.png';
	import { Badge } from '$lib/components/ui/badge';
	import { Map, Cog, Download, Palette } from '@lucide/svelte';
</script>

<div class="flex h-full flex-col gap-4 p-3 pt-4 md:p-4">
	<!-- flex-[2] makes this box take up 2 portions -->
	<a href="/full-stack" class="flex-2 rounded-xl bg-muted/50">
		<!-- Content Section -->
		<div class="relative z-10 -mt-12 px-2 py-6 md:p-8">
			<!-- Title -->
			<div class="m-4 text-center">
				<h1 class="flex justify-start pt-4 text-2xl text-muted-foreground">Full Stack</h1>
			</div>
			<div class="mt-6 flex flex-col items-center justify-center">
				<div class="w-full max-w-4xl">
					<div class="overflow-hidden rounded-2xl border bg-card shadow-2xl">
						<!-- Banner Image with Overlay -->
						<div class="relative w-full">
							<img src={HomeBanner} alt="Teramap Banner" class="h-auto w-full object-cover" />
							<div
								class="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent"
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Feature Pills -->
		<div class="mb-2 flex flex-wrap justify-center gap-2">
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
		<div class="p-3 text-center text-sm text-muted-foreground">
			<p>
				Developed, deployed, and maintained several full stack applications, with advanced features
				such as background jobs, database backups, test/prod environment management. Technologies
				leveraged include:
			</p>
			<ul class="ml-8 text-left text-xs">
				<li>
					• <b>Docker Compose</b> for development, testing, staging, and deployment to AWS EC2 instances.
				</li>
				<li>
					• <b>Python / Django</b> for database migration ORM design, backend development, and API creation.
				</li>
				<li>
					• <b>Prometheus & Grafana</b> for monitoring and visualization of application performance.
				</li>
			</ul>
			<img
				src={GrafanaImg}
				class="mx-auto mt-4 w-64 rounded-2xl border bg-card shadow-2xl"
				alt="Grafana Screenshot"
			/>
		</div></a
	>

	<!-- flex-1 makes this grid take up 1 portion -->
	<div class="grid flex-1 grid-cols-3 gap-2 md:gap-4">
		<a href="/geospatial" class="rounded-xl bg-muted/50"></a>
		<a href="/resume" class="rounded-xl bg-muted/50"></a>
		<a href="/community" class="rounded-xl bg-muted/50"></a>
	</div>
</div>
