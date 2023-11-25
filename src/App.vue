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
    <div class="div">
      <div class="group-wrapper">
        <div class="group-2">
          <p class="text-wrapper">
            L’application arrive bientôt ! Abonne-toi à notre newsletter pour être la première personne à connaître sa disponibilité. 
          </p>
          <p class="p">Abonne toi à notre Newsletter</p>
          <div class="form">
            <input type="text" name="" placeholder="E-mail ou numéro de téléphone" id="email" v-model="userInfo">
            <button @click="send"><img src="./assets/btn.svg"  alt=""></button>
          </div>
        </div>
      </div>
      <img class="image" alt="Image" src="./assets/comingSoon.svg" />
      <div class="overlap-3">
        <div class="overlap-wrapper">
          <div class="overlap-4">
            <img
              class="rectangle"
              alt="Rectangle"
              src="./assets/rectangle-1.svg"
            />
            <img
              class="rectangle-2"
              alt="Rectangle"
              src="./assets/rectangle-2.svg"
            />
          </div>
        </div>
        <img class="n" alt="N" src="https://c.animaapp.com/wesHOzyW/img/n--1--1@2x.png" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.container .div {
  background-color: #000000;
  height: 812px;
  overflow: hidden;
  position: relative;
  width: 375px;
}

.container .form {
  border-radius: 4px;
  left: 0;
  position: absolute;
  top: 35px;
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
}


.container .group-wrapper {
  height: 156px;
  left: 27px;
  position: absolute;
  top: 323px;
  width: 331px;
}

.container .group-2 {
  height: 156px;
  position: relative;
  width: 335px;
}

.container .text-wrapper {
  color: #ffffff;
  font-family: "Work Sans", Helvetica;
  font-size: 16px;
  font-weight: 500;
  left: 1px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 79px;
  width: 313px;
}

.container .p {
  color: #ffffff;
  font-family: "Work Sans", Helvetica;
  font-size: 22px;
  font-weight: 700;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: -30px;
  white-space: nowrap;
  width: 331px;
}

.container .image {
  height: 266px;
  left: 50px;
  position: absolute;
  top: 0;
  width: 262px;
}

.container .overlap-3 {
  height: 484px;
  left: -122px;
  position: absolute;
  top: 519px;
  width: 593px;
}

.container .overlap-wrapper {
  height: 439px;
  left: 17px;
  position: absolute;
  top: 22px;
  transform: rotate(4.73deg);
  width: 559px;
}

.container .overlap-4 {
  height: 319px;
  left: 86px;
  position: relative;
  top: -34px;
  width: 398px;
}

.container .rectangle {
  height: 290px;
  left: 11px;
  position: absolute;
  top: 15px;
  transform: rotate(-4.73deg);
  width: 370px;
}

.container .rectangle-2 {
  height: 244px;
  left: 17px;
  position: absolute;
  top: 61px;
  transform: rotate(-4.73deg);
  width: 372px;
}

.container .n {
  height: 193px;
  left: 219px;
  position: absolute;
  top: 79px;
  width: 192px;
}
</style>