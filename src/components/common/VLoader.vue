<template>
  <div class="loader">
    <div class="loader-inner loader-inner--one"></div>
    <div class="loader-inner loader-inner--two"></div>
    <div class="loader-inner loader-inner--three"></div>
    <div class="loader-text">Loading...</div>
  </div>
</template>

<script>
export default {
  name: "VLoader"
};
</script>

<style lang="scss" scoped>
.loader {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  margin: 50px 0;
  perspective: 780px;

  &-text {
    font-size: 14px;
    animation: loader-text 1.5s linear infinite;
  }

  &-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;

    &--one {
      left: 0;
      top: 0;
      animation: loader-rotate-one 1.15s linear infinite;
      border-bottom: 3px solid #27AE60;
    }

    &--two {
      right: 0;
      top: 0;
      animation: loader-rotate-two 1.15s linear infinite;
      border-right: 3px solid #1E70BB;
    }

    &--three {
      right: 0;
      bottom: 0;
      animation: loader-rotate-three 1.15s linear infinite;
      border-top: 3px solid #FF7D34;
    }
  }
}

@keyframes loader-text {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes loader-rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes loader-rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes loader-rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>
