import Vue from 'vue'
import Router from 'vue-router'
import TrainingTemplate from '@/components/TrainingTemplate'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import pdf from 'vue-pdf'

Vue.use(Router)
Vue.component('icon', Icon)
Vue.component('pdf', pdf)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TrainingTemplate',
      component: TrainingTemplate
    }
  ]
})
