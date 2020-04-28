<template>
  <div id="aboutSection">
    <div id="aboutTitle">
      About Me
    </div>
    <div id="aboutExplain">
      <p>
        初めまして！岡崎 悠（おかざきゆう）です！平成１１年（１９９９年）生まれの現在２０歳です。出身は高知県で、専門学校から東京に来ました。好きなことは、読書、散歩、料理、運動です。基本的にインドアで、出かける日は１日中出かける事が多いです。専門学生時代は、資格取得に力を入れました。取得したものは、「基本情報技術者試験」「Webクリエイター能力認定試験 エキスパート」「情報処理技術者能力認定試験二級」です。他に、少しだけコーディングもしていました。主に、I T業界で働く上での基礎知識や、技術を学びました。基本的に明るい性格で、健康と笑顔を大切にしています。<br><br>
      </p>
      <p id="profileLink">
        <a
          href="https://www.seattleconsulting.co.jp/team20/person/person03.html"
          target="_blank"
        >シアトルコンサルティング内定者紹介サイト</a>上記のサイトで私を紹介していただきました。ありがとうございます！<br>もしよろしければご覧ください。
      </p>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import url(https://www.google.com/get/noto/);

#aboutSection {
  background-color: #f5f5f5;
  width: 100%;
  height: auto;
  padding: 10px;
  text-align: center;
}

#aboutTitle {
  color: #20879f;
  font-family: 'Noto Sans', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 18pt;
  text-shadow: 1px 1px 3px gray;
  padding: 30px;
}

#aboutExplain {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  font-weight: bold;
  word-break: break-all;
  line-height: 1.7;
  margin: auto;
  text-align: left;
  width: 50%;
  padding: 20px 0 50px 0;
}

#profileLink {
  text-align: center;

  a {
    text-decoration: none;
    color: black;
    display: block;
    padding: 20px 100px;
  }

  a:hover {
    opacity: 0.5;
    text-decoration: underline;
  }
}
</style>
