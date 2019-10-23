<template>
	<div>
		<h5>{{ title }} <span class="badge badge-info">{{ items.length }}</span></h5>
		<div class="card">
			<div class="card-body">
				<ul class="list-group">
					<li class="list-group-item" v-for="item in items" v-bind:key="item">
						<div class="row">
							<div class="col-md">
								{{ item }}
							</div>
							<div class="col-md text-right">
								<button class="btn btn-info" v-on:click="deleteItem(item)"><span class="fa fa-trash"></span></button>
							</div>
						</div>
					</li>
				</ul>
				<br/>
				<div class="input-group">
					<input class="form-control" type="text" v-model="item" v-on:keyup.enter="addItem(item)" placeholder="Digite o item"/>
					<div class="input-group-append">
						<button class="btn btn-info" v-on:click="addItem(item)"><span class="fa fa-plus"></span></button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "AppItemList",
	props: ["title", "items"],
	data() {
		return {
			item: ""
		};
	},
	methods: {
		addItem(item) {
			this.$emit("addItem", item);
			this.item = "";
		},
		deleteItem(item) {
			this.$emit("deleteItem", item);
		}
	}
};
</script>

<style scoped>
</style>
