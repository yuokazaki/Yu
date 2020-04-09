<template>
  <div id="mainSection">
    <div id="userName">
      Yu.Okazaki
    </div>
    <div id="companyName">
      Seattleconsulting
    </div>
    <img id="profilePicture" src="../assets/image/profilePicture.jpeg">
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg:String
  }
}
</script>

<style scoped>
@import url(https://www.google.com/get/noto/);

#mainSection {
  background: linear-gradient(#80E1F7, #06C1E6);
  width: 100%;
  height: 230px;
  text-align: center;
}
#userName {
  color: #FFFFFF;
  font-family: 'Noto Sans';
  font-weight: bold;
  font-size: 25pt;
  text-shadow:1px 1px 3px #000000;
  padding: 30px 0;
}
#companyName {
  color: #FFFFFF;
  font-family: 'Noto Sans';
  font-weight: bold;
  font-size: 20pt;
  text-shadow:1px 1px 3px #000000;
}
#profilePicture {
  border-radius: 50%;
  width: 64px;
  height: 64px;
  padding: 30px 0;
}
</style>