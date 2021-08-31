const app = Vue.createApp({
  data() {
    return {
      firstName: "Kamoliddin",
      lastName: "Jamoliddinov",
      email: "k@gmail.com",
      phone: "1234567",
      address: "Tashkent",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/9.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      (this.firstName = results[0].name.first),
        (this.lastName = results[0].name.last),
        (this.email = results[0].email),
        (this.phone = results[0].phone),
        (this.address = results[0].location.country),
        (this.gender = results[0].gender),
        (this.picture = results[0].picture.large);
    },
  },
});
app.mount("#app");
