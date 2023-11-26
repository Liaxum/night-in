<script setup lang="ts">
  import { ref } from 'vue'
import { supabase } from './supabase';

    const userInfo = ref('')
  const send = async () => {
    if (!userInfo.value) {
      alert('Veuillez renseigner votre email ou numéro de téléphone !');
      return;
    }

    if (!userInfo.value.includes('@') && !userInfo.value.includes('+')) {
      alert('Veuillez renseigner un email ou numéro de téléphone valide !');
      return;
    }

    const { data, error } = await supabase
      .from('newsletter')
      .insert([{ email: userInfo.value }])
    if (error) {
      alert('Une erreur est survenue, veuillez réessayer plus tard !');
    } else {
      alert('Merci pour votre inscription !');
    }
  }
</script>


<template>
  <div class="container">
    <img class="image" alt="Image" src="./assets/comingSoon.svg" />
    <p class="p">Abonne toi à notre Newsletter</p>
    <div class="form">
      <input type="text" name="" placeholder="E-mail ou numéro de téléphone" id="email" v-model="userInfo">
      <button @click="send"><img src="./assets/btn.svg"  alt=""></button>
    </div>
    <p class="text-wrapper">
      L’application arrive bientôt ! Abonne-toi à notre newsletter pour être la première personne à connaître sa disponibilité. 
    </p>
    <img src="./assets/footer.svg" alt="" class="footer">
  </div>
</template>

<style scoped>
.container {
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.container .form {
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.container .form input {
  background: rgba(255, 255, 255, 0.20);
  backdrop-filter: blur(3px);
  border: none;
  width: 275px;
  height: 39px;
  color: #B9B9B9;
  font-size: 12px;
  padding-left: 10px;
}

.container .form button {
  width: 43px;
  height: 43px;
  border: none;
  border-radius: 0;
  cursor: pointer;
}

.container .text-wrapper {
  color: #ffffff;
  font-family: "Work Sans", Helvetica;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 26px;
  width: 313px;
}

.container .p {
  color: #ffffff;
  font-family: "Work Sans", Helvetica;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
  width: 331px;
}

.container .image {
  height: 266px;
  width: 262px;
}

.container .footer {
  height: 100%;
}

@media screen and (max-width: 1000px) {
  .container .footer {
    width: 100%;
    height: 100%;
  }
}

</style>
