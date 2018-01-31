import Vue from 'vue'
import Router from 'vue-router'
import TrainingTemplate from '@/components/TrainingTemplate'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VuePDFViewer from 'vue-instant-pdf-viewer'

Vue.use(Router)
Vue.component('icon', Icon)
Vue.component('vue-pdf-viewer', VuePDFViewer)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TrainingTemplate',
      component: TrainingTemplate
    }
  ]
})
