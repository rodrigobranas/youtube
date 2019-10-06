<template>
	<div>
		<div id="slogan" class="text-center">
			<h1>NameGator</h1>
			<br/>
			<h6 class="text-secondary">Gerador de nomes utilizando Vue.js, GraphQL e Node</h6>
		</div>
		<div id="main">
			<div class="container">
				<div class="row">
					<div class="col-md">
						<h5>Prefixos <span class="badge badge-info">{{ prefixes.length }}</span></h5>
						<div class="card">
							<div class="card-body">
								<ul class="list-group">
									<li class="list-group-item" v-for="prefix in prefixes" v-bind:key="prefix">
										<div class="row">
											<div class="col-md">
												{{ prefix }}
											</div>
											<div class="col-md text-right">
												<button class="btn btn-info" v-on:click="deletePrefix(prefix)"><span class="fa fa-trash"></span></button>
											</div>
										</div>
									</li>
								</ul>
								<br/>
								<div class="input-group">
									<input class="form-control" type="text" v-model="prefix" v-on:keyup.enter="addPrefix(prefix)" placeholder="Digite o prefixo"/>
									<div class="input-group-append">
										<button class="btn btn-info" v-on:click="addPrefix(prefix)"><span class="fa fa-plus"></span></button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md">
						<h5>Sufixos <span class="badge badge-info">{{ sufixes.length }}</span></h5>
						<div class="card">
							<div class="card-body">
								<ul class="list-group">
									<li class="list-group-item" v-for="sufix in sufixes" v-bind:key="sufix">
										<div class="row">
											<div class="col-md">
												{{ sufix }}
											</div>
											<div class="col-md text-right">
												<button class="btn btn-info" v-on:click="deleteSufix(sufix)"><span class="fa fa-trash"></span></button>
											</div>
										</div>
									</li>
								</ul>
								<br/>
								<div class="input-group">
									<input class="form-control" type="text" v-model="sufix" v-on:keyup.enter="addSufix(sufix)" placeholder="Digite o sufixo"/>
									<div class="input-group-append">
										<button class="btn btn-info" v-on:click="addSufix(sufix)"><span class="fa fa-plus"></span></button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<br/>
				<h5>Domínios <span class="badge badge-info">{{ domains.length }}</span></h5>
				<div class="card">
					<div class="card-body">
						<ul class="list-group">
							<li class="list-group-item" v-for="domain in domains" v-bind:key="domain.name">
								<div class="row">
									<div class="col-md">
										{{ domain.name }}
									</div>
									<div class="col-md text-right">
										<a class="btn btn-info" v-bind:href="domain.url" target="_blank">
											<span class="fa fa-shopping-cart"></span>
										</a>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

export default {
	name: "app",
	data: function () {
		return {
			prefix: "",
			sufix: "",
			prefixes: ["Air", "Jet", "Flight"],
			sufixes: ["Hub", "Station", "Mart"]
		};
	},
	methods: {
		addPrefix(prefix) {
			this.prefixes.push(prefix);
			this.prefix = "";
		},
		deletePrefix(prefix) {
			this.prefixes.splice(this.prefixes.indexOf(prefix), 1);
		},
		addSufix(sufix) {
			this.sufixes.push(sufix);
			this.sufix = "";
		},
		deleteSufix(sufix) {
			this.sufixes.splice(this.sufixes.indexOf(sufix), 1);
		},
		encode(domain) {
			const encodedDomain = [];
			for (const char of domain) {
				encodedDomain.push(String.fromCharCode(char.charCodeAt(0) - 47));
			}
			return encodedDomain.join("");
		}
	},
	computed: {
		domains() {
			console.log("generating domains...");
			const domains = [];
			for (const prefix of this.prefixes) {
				for (const sufix of this.sufixes) {
					const name = prefix + sufix;
					const token = `D=5l${this.encode(name.toLowerCase())}UE=5l]4@>]3C`;
					const url = `https://www.hostgator.com.br/registro-de-dominio?token=${token}`;
					const domain = {
						name,
						url
					};
					domains.push(domain);
				}
			}
			return domains;
		}
	}
};
</script>

<style>
#slogan {
	margin-top: 30px;
	margin-bottom: 30px;
}
#main {
	background-color: #F1F1F1;
	padding-top: 30px;
	padding-bottom: 30px;
}
</style>
