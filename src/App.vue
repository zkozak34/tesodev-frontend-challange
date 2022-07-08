<template>
  <router-view />
  <footer class="footer">
    <img src="@/assets/images/footer.png" alt="" />
    <div class="contact">
      <div class="address">
        <span class="fs-16 fw-700">İletişim</span>
        <p class="fs-18 fw-400">
          Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
        </p>
      </div>
      <p class="fs-16 fw-700">Email: bilgi@tesodev.com</p>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2797470199484!2d28.888754051262442!3d41.01913527919811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1657172268022!5m2!1str!2str"
      height="220"
      style="border: 0"
      allowfullscreen="false"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  background-color: rgba($color: $footer-color, $alpha: 0.72);
  width: 100%;
  padding: 50px 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;

  img {
    width: 20%;
    height: 20%;
  }

  .contact {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
  }

  iframe {
    width: 30%;
  }
}
</style>
