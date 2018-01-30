import Vue from 'vue'
import Router from 'vue-router'
import TrainingTemplate from '@/components/TrainingTemplate'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.use(Router)
Vue.component('icon', Icon)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TrainingTemplate',
      component: TrainingTemplate
    }
  ]
})
