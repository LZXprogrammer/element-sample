<template lang="html">

</template>

<script>
export default {
  // ======== get =========
  // 为给定的用户传参
  axios.get('/user?id=1')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  // 上面请求也可写成
  axios.get('/user', {
    params: {
      id: 1
    }
  })
  .then(function (response) {

  })
  .catch(function (error) {

  });

  // ======== post =========
  axios.post('/user', {
    firstName: 'qq',
    lastName: 'ww'
  })
  .then(function (response) {

  })
  .catch(function (error) {

  });

  // ======== 多个并发请求 =========
  function getUserAccount() {
    return axios.get('/user?id=1');
  }
  function getUserPermission() {
    return axios.post('/user',{ aa: 'aa', bb: 'bb' });
  }
  axios.all([getUserAccount(), getUserPermission()])
  .then(axios.spread(function (acct, perm) {
    console.log();
  }));

  // ========= axios API ============
  axios({
    method: 'post',
    url: '/user',
    data: {
      firstName: 'Liu',
      lastName: 'Zhenxing'
    }
  });







}
</script>

<style lang="css">
</style>
