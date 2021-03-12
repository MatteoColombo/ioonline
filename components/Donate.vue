<template>
  <div align="center" class="donate">
    <h3 class="donate">{{$t('generic.support')}}</h3>
    <p>{{$t('generic.supportdesc')}}</p>
    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="hosted_button_id" value="7J6XXSWLCHLK2" />
      <input
        type="image"
        src="https://www.online.cubingitaly.org/PP_donazione.png"
        border="0"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
      <img
        alt=""
        border="0"
        src="https://www.paypal.com/it_IT/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
    <p>IBAN: IT86W0623001627000046643274</p>
  </div>
</template>

<style scoped>
.donate{
    margin-top:20px;
    margin-bottom:20px;
}

</style>