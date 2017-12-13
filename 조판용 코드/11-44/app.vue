<template>
	<section>
		<transition-group name="list" tag="ul">
			<li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow">
				...
			</li>
		</transition-group>
	</section>
</template>
