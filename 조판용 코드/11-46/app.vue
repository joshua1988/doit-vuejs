<template>
	<transition name="modal">
		<div class="modal-mask" @keyup.esc="$emit('close')">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header">
						<slot name="header">
							<!--  -->
						</slot>
					</div>

					<div class="modal-footer">
						<slot name="footer">
							<!--  -->
						</slot>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>
