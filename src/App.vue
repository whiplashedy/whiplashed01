<template>
	<v-app>
   <v-toolbar scroll-toolbar-off-screen>
    <v-spacer></v-spacer>

    <v-toolbar-items>

      <v-btn flat><router-link to="/signin" tag="span" style="cursor: pointer">Заказать услугу</router-link></v-btn>
      <v-btn flat><router-link to="/signup" tag="span" style="cursor: pointer">Поданные заявки</router-link></v-btn>
      <v-btn flat><router-link to="/" tag="span" style="cursor: pointer">Изменить пароль</router-link></v-btn>
    </v-toolbar-items>
  </v-toolbar>
</v-app>
</template>

<script>
export default {
  
}
</script>

<style>

</style>
