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
										{{ prefix }}
									</li>
								</ul>
								<br/>
								<input class="form-control" type="text" placeholder="Digite o prefixo"/>
							</div>
						</div>
					</div>
					<div class="col-md">
						<h5>Sufixos <span class="badge badge-info">{{ sufixes.length }}</span></h5>
						<div class="card">
							<div class="card-body">
								<ul class="list-group">
									<li class="list-group-item" v-for="sufix in sufixes" v-bind:key="sufix">
										{{ sufix }}
									</li>
								</ul>
								<br/>
								<input class="form-control" type="text" placeholder="Digite o sufixo"/>
							</div>
						</div>
					</div>
				</div>
				<br/>
				<h5>Domínios <span class="badge badge-info">{{ domains.length }}</span></h5>
				<div class="card">
					<div class="card-body">
						<ul class="list-group">
							<li class="list-group-item" v-for="domain in domains" v-bind:key="domain">
								{{ domain }}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"

export default {
  name: 'app',
  data: function () {
	  return {
		  prefixes: ['Air', 'Jet', 'Flight'],
		  sufixes: ['Hub', 'Station', 'Mart'],
		  domains: ['AirHub', 'AirStation', 'AirMart', 'JetHub', 'JetStation', 'JetMart', 'FlightHub', 'FlighStation', 'FlightMart']
	  };
  }
}
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
