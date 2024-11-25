<template>
       <div class="flex justify-center items-center p-4">
    <div class="relative w-full max-w-2xl">
      <!-- Input field -->
      <input type="text" placeholder="Search" class="w-full py-3 px-6 bg-figma-1 rounded-full shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"/>
      <!-- Search Icon -->
      <button class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800">
        <img src="https://i.ibb.co.com/BZXK9HK/search-svgrepo-com.png" alt="Search Icon" class="h-5 w-5"
        />
      </button>
    </div>
  </div>
    <!-- Main Content -->
    <div class="px-6 py-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Filter Section -->
        <div class="col-span-1">
          <div class="p-6">
            <h3 class="text-lg font-bold mb-4 text-gray-800">Select Service</h3>
            <select v-model="selectedService" class="w-full bg-transparent border border-gray-800 rounded-lg p-2 mb-4">
              <option>All service</option>
              <option>Wedding</option>
              <option>Graduation</option>
            </select>
            <h3 class="text-lg font-bold mb-4 text-gray-800">Select Location</h3>
                <input type="text" v-model="selectedLocation" placeholder="Type your location here" class="w-full bg-transparent border border-gray-800 rounded-lg p-2 mb-4"/>
            <h3 class="text-lg font-bold mb-4 text-gray-800">Price Range</h3>
            <div class="flex flex-col space-y-2">
              <input type="number" v-model="priceMin" placeholder="Rp Minimum" class="w-full bg-transparent border border-gray-800 rounded-lg p-2 mb-4"/>
              <input type="number" v-model="priceMax" placeholder="Rp Maximum" class="w-full bg-transparent border border-gray-800 rounded-lg p-2 mb-4"/>
            </div>
            <button @click="resetFilter" class="text-red-500 mt-4">Reset Filter</button>
          </div>
        </div>
            <div class="w-full h-full bg-figma-1 flex justify-center rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
                <div class="w-full h-full p-3 flex flex-col items-center">
                    <img class="w-full h-[45%] rounded-lg transform transition-all duration-300 group-hover:-translate-y-10 group-hover:shadow-cardmua" src="https://i.ibb.co.com/fdPdPnJ/cardmua1.jpg" alt=""> 
                    <div class="text-center h-full flex flex-col gap-2 mt-5">
                        <h1 class="font-bold text-lg text-figma-11">Maharani Gallery</h1>
                        <h2 class="font-bold text-sm text-figma-11 ">Malang</h2>
                        <p class="font-thin text-xs text-figma-11">Open jasa makeup wedding, graduation, we...</p>
                    </div>
                    <div class="w-full h-full border-t border-figma-11 mt-5 mx-2">
                        <div class="w-full h-full flex flex-row">
                            <div class="w-full h-full flex flex-col">
                                <h4 class="font-thin text-xs pt-5 text-figma-11">Start Form</h4>
                                <h2 class="font-bold text-figma-7 text-sm">IDR 100.000,00</h2>
                            </div>
                            <div class="w-full h-full flex flex-col items-end">
                                <h4 class="font-thin text-xs pt-5 text-figma-11">134 Reviews</h4>
                                <div class="flex items-center">
                                    <img src="https://i.ibb.co.com/yX7gzRF/image-54.png" alt="Star Rating" class="w-4 h-4">
                                    <h5 class="font-bold text-figma-11 text-sm ml-1">4/5</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h-full flex items-center">
                        <CustomLink to="/" class="text-sm">
                            Detail
                        </CustomLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      // Data untuk kartu (list item)
      cards: [
        {
          id: 1,
          title: "Maharani Gallery",
          location: "Malang",
          description: "Open jasa makeup wedding, graduation, we...",
          price: "IDR 100.000,00",
          reviews: 134,
          rating: "4/5",
          ratingIcon: "https://i.ibb.co.com/yX7gzRF/image-54.png",
          image: "https://i.ibb.co.com/fdPdPnJ/cardmua1.jpg",
        },
        {
          id: 2,
          title: "Rani Beauty Studio",
          location: "Surabaya",
          description: "Professional makeup artist for events...",
          price: "IDR 150.000,00",
          reviews: 200,
          rating: "5/5",
          ratingIcon: "https://i.ibb.co.com/yX7gzRF/image-54.png",
          image: "https://i.ibb.co.com/fdPdPnJ/cardmua1.jpg",
        },
        // Tambahkan data kartu lainnya
      ],
      // Filter state
      searchQuery: "",
      selectedService: "All service",
      selectedLocation: "",
      priceMin: "",
      priceMax: "",
      filteredCards: [],
    };
  },
  methods: {
    // Filter data berdasarkan input
    filterCards() {
      this.filteredCards = this.cards.filter((card) => {
        const matchesSearchQuery =
          this.searchQuery === "" ||
          card.title.toLowerCase().includes(this.searchQuery.toLowerCase());

        const matchesLocation =
          this.selectedLocation === "" ||
          card.location.toLowerCase().includes(this.selectedLocation.toLowerCase());

        const matchesPrice =
          (!this.priceMin || parseInt(card.price.replace(/[^\d]/g, "")) >= this.priceMin) &&
          (!this.priceMax || parseInt(card.price.replace(/[^\d]/g, "")) <= this.priceMax);

        // Filter berdasarkan service (jika ada properti "service")
        const matchesService =
          this.selectedService === "All service" || // Default "All service"
          (card.service && card.service === this.selectedService);

        return matchesSearchQuery && matchesLocation && matchesPrice && matchesService;
      });
    },
    // Reset filter
    resetFilter() {
      this.searchQuery = "";
      this.selectedService = "All service";
      this.selectedLocation = "";
      this.priceMin = "";
      this.priceMax = "";
      this.filteredCards = [...this.cards];
    },
  },
  created() {
    // Inisialisasi dengan semua kartu
    this.filteredCards = [...this.cards];
  },
};
</script>