<template>
<div class="container-fluid">
  <div class="row ">
    <div class="col-3 p-4 bg-secondary">
      <h1>Gifted</h1>
      <!-- {{ gifts }} -->
    </div>
    <div class="col-9 bg-success p-5 ">
      <section class="row d-flex justify-content-between ">

        <div v-for="gift in gifts" :key="gift.id" style="width: 22rem" class="mb-4 col-4 bg-white p-3 rounded text-center card">
          <GiftCard :giftProp="gift"/>
          <!-- **STUB - moved to gift card -->
          <!-- <div v-if="gift.opened"><img class="img-fluid"  :src="gift.url" :alt="gift.tag"></div>
          <div v-else-if="!gift.opened">No gift for you</div>
            <p class="fs-4" >{{gift.tag}}</p> -->
        </div>

      </section>
    </div>
  </div>
</div>
</template>

<script>
import { computed, onMounted } from "vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { giftsService } from "../services/GiftsService.js"
import { AppState } from "../AppState.js";
import GiftCard from "../components/GiftCard.vue"

export default {
  setup() {
    async function getGifts(){
      try {
        await giftsService.getGifts()
      } catch (error) {
        Pop.error(error, '[GETTING MOVIES]')
      }
    }


    onMounted(() => {
      logger.log('[HomePage Mounted]')
      getGifts()
    })
    return {
      gifts: computed(() => AppState.gifts)
    }
  },
  components: { GiftCard }
}
</script>

<style scoped lang="scss">
</style>
