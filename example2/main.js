import Vue from 'vue';

Vue.component('child', {
	props: {
		texat: {
			type: String,
			required: true
		}
	},
	template: '<div>{{ texat }}</div>'
})

new Vue({
	el: '#app',
	data() {
		return {
			message: "hero"
		}
	}
});


