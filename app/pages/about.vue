<template>
  <div class="w-full px-12 py-6 text-[#2A2230] grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

    <!-- Left: content -->
    <div>
      <div class="w-full mb-4">
        <h1 class="text-4xl font-bold mb-4">About <span class="italic font-normal">Baby Nutrition</span></h1>
        <p class="text-gray-500 text-base">
          We believe every baby deserves delicious, nutritious meals. Our recipes are crafted by pediatric
          nutritionists to support healthy growth at every stage — from first tastes to family meals.
        </p>
      </div>
      <div class="h-100 w-full overflow-hidden flex items-center rounded-2xl">
        <img class="mb-4 object-contain" src="../assets/images/baby.jpg" alt="">
      </div>
    </div>

    <!-- Right: game -->
    <div class="lg:sticky h-full lg:top-6">
      <IngredientGame />
    </div>

  </div>
</template>
