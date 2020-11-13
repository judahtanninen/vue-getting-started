import Vue from 'vue'
import Vuex from 'vuex'
import {dataService} from '../shared'

Vue.use(Vuex)

const state = {
  heroes: [],
}; 
const mutations = {
 getHeroes(state, heroes) {
   state.heroes = heroes;
 },
};

const actions = {
  async getHeroesAction({commit}) {
    const heroes = await dataService.getHeroes();
    commit('getHeroes', heroes);
  }
}
const getters = {
  getHeroById: state => id => state.heroes.find(h => h.id === id),
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
