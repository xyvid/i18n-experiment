<script lang="ts">
import { _, localDate, localTime } from "$lib/data/localize";
import { event_date } from "$lib/data/appStore";
import LocalText from "$lib/components/LocalText.svelte";	
import CountdownClock from "$lib/components/CountdownClock/CountdownClock.svelte";
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-12 text-center w-2/4">
		<h2 class="font-bold">
			{_('welcome')}
		</h2>
		<div class="card p-8">
			<div class="t text-3xl">
				<LocalText slug="today_is" />
				{localDate(new Date())}
			</div>			
			<div class="text-xl">
				<LocalText slug="the_time_is" />
				{localTime(new Date())}
			</div>
		</div>
				
		<div class="card p-8">
			<button class="btn btn-xl variant-filled-primary">{_('continue')}</button>
		</div>	
		
		<div class="w-full">
			<CountdownClock event_date={$event_date} />
		</div>
	</div>
</div>
