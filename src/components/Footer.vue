<script setup></script>

<template>
	<footer class="relative">
		<div class="w-full">
			<img src="@/assets/img/vectors/dashed-line.png" class="w-full" alt="" />
		</div>
		<div class="w-container py-10 lg:py-20">
			<div class="flex flex-col justify-between lg:flex-row">
				<router-link to="/" class="mb-10 inline-block lg:mb-0">
					<img src="@/assets/img/icons/logo.svg" alt="" />
				</router-link>
				<div>
					<nav class="mb-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-20">
						<ul>
							<li>
								<router-link to="">Алматы</router-link>
							</li>
							<li>
								<router-link to="">Астана</router-link>
							</li>
							<li>
								<router-link to="">Павлодар</router-link>
							</li>
						</ul>
						<ul>
							<li>
								<router-link to="">Петропавловск</router-link>
							</li>
							<li>
								<router-link to="">Семей</router-link>
							</li>
							<li>
								<router-link to="">Караганда</router-link>
							</li>
						</ul>
						<ul>
							<li>
								<router-link to="">Тараз</router-link>
							</li>
							<li>
								<router-link to="">Усть-Каменогорск</router-link>
							</li>
							<li>
								<router-link to="">Актобе</router-link>
							</li>
						</ul>
					</nav>
					<div class="flex items-center justify-between">
						<router-link to="">О нас</router-link>
						<p>Все права защищены © 2022</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped></style>
