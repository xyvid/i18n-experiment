<script lang="ts">
import { _, localDate, localTime } from "$lib/data/localize";

import LocalText from "$lib/components/LocalText.svelte";	
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		<h2 class="font-bold">
			{_('welcome')}
		</h2>
		<div class="card text-3xl">
			<LocalText slug="today_is" />
			{localDate(new Date())}
		</div>
		<div class="card">
			<LocalText slug="the_time_is" />
			{localTime(new Date())}
		</div>							
	</div>
</div>
