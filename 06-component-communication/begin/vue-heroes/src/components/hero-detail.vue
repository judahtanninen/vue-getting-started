<template>
  <div >
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{ fullName }}</p>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="field">
            <label class="label" name="id" readonly>{{ clonedHero.id }}</label>
            <input
              class="input"
              name="id"
              type="number"
              v-model="clonedHero.id"
            />
          </div>
          <div class="field">
            <label class="label" for="firstName">First name</label>
            <input
              class="input"
              name="firstName"
              v-model="clonedHero.firstName"
            />
          </div>
          <div class="field">
            <label class="label" for="lastName">Last name</label>
            <input
              class="input"
              name="lastName"
              v-model="clonedHero.lastName"
            />
          </div>
          <div class="field">
            <label class="label" for="description">Description</label>
            <input
              class="input"
              name="description"
              v-model="clonedHero.description"
            />
          </div>
          <div class="field">
            <label class="label" for="originDate">Origin date</label>
            <input
              type="date"
              class="input"
              id="originDate"
              v-model="clonedHero.originDate"
            />
            <p class="comment">
              My origin story began on
              {{ clonedHero.originDate | shortDate }}, after I fell into some
              radioactive raccoon shit.
            </p>
          </div>
          <div class="field">
            <label class="label" for="capeCounter">Cape counter</label>
            <input
              class="input"
              name="capeCounter"
              type="number"
              v-model="clonedHero.capeCounter"
            />
          </div>
          <div class="field">
            <label class="label" for="capeMessage">Cape message</label>
            <label class="input" name="capeMessage">{{ capeMessage }}</label>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <button
          class="link card-footer-item cancel-button"
          @click="cancelHero()"
        >
          <i class="fas fa-undo"></i>
          <span>Cancel</span>
        </button>
        <button class="link card-footer-item" @click="saveHero()">
          <i class="fas fa-save"></i>
          <span>Save</span>
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns';
import { displayDateFormat } from '../shared';

export default {
  name: 'HeroDetail',
  props: {
    hero: {
      type: Object,
      default: () => {},
    },
  },
  data() {
      return {
          clonedHero: { ...this.hero}
      }
  },
    computed: {
    fullName() {
      return this.clonedHero
        ? `${this.clonedHero.firstName} ${this.clonedHero.lastName}`
        : '';
    },
  },
  methods: {
        cancelHero() {
        this.$emit("cancel");
    },
    saveHero() {
        this.$emit("save", this.clonedHero);

    },
          handleTheCapes(newValue) {
      const value = parseInt(newValue, 10);
      switch (value) {
        case 0:
          this.capeMessage = 'Where is my cape?';
          break;
        case 1:
          this.capeMessage = 'One is all I need';
          break;
        case 2:
          this.capeMessage = 'Always have a spare';
          break;
        default:
          this.capeMessage = 'I literally eat my capes I have so many';
          break;
      }
      
    },
  },
     watch: {
    'clonedHero.capeCounter': {
      immediate: true,
      handler(newValue, oldValue) {
        this.handleTheCapes(newValue);
      },
    },
  },
  filters: {
    shortDate: function(value) {
      return format(value, displayDateFormat);
    },
  
  },
};
</script>

<style lang="scss" scoped>
</style>