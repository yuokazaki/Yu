<template>
  <div id="mainSection">
    <div id="userName">
      Yu.Okazaki
    </div>
    <div id="companyName">
      Seattleconsulting
    </div>
    <img
      id="profilePicture"
      src="../assets/image/profilePicture.jpeg"
    >
  </div>
</template>

<script>
</script>

<style scoped>
@import url(https://www.google.com/get/noto/);

#mainSection {
  background: linear-gradient(#80e1f7, #06c1e6);
  width: 100%;
  height: 230px;
  text-align: center;
  margin-top: 40px;
  min-height: 200px;
  border-bottom: solid 1px #80e1f7;
}

#userName {
  color: #fff;
  font-family: 'Noto Sans', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 25pt;
  text-shadow: 1px 1px 3px #000;
  padding: 20px 0;
  display: inline-block;
  border-bottom: 3px double white;
}

#companyName {
  color: #fff;
  font-family: 'Noto Sans', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 20pt;
  text-shadow: 1px 1px 3px #000;
  padding: 20px 0 0 0;
}

#profilePicture {
  border-radius: 50%;
  width: 64px;
  height: 64px;
  padding: 20px 0;
}
</style>
