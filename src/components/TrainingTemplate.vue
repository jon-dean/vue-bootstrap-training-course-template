<template>
  <b-container fluid>
    <b-row id="headerBar">

      <!-- Small Screen Collapsed Lesson List -->
      <div class="d-block d-lg-none">
        <b-dropdown id="smallScreenCourseContent" variant="link" size="lg" no-caret>
          <template slot="button-content">
            <icon name="bars" scale="1.5" class="text-white"></icon>
          </template>
          <div class="courseProgress">
            <b-progress :value="percentageCompleted" :max="100" class="mb-3" variant="success"></b-progress>
            <p class="text-center"><strong>{{ percentageCompleted }}% Completed</strong></p>
          </div>

          <div id="smallScreenLessonList" v-for="item in courseContentList" v-bind:key="item.moduleTitle">
            <b-dropdown-item class="moduleTitle" disabled>{{ item.moduleTitle }}</b-dropdown-item>
            <div v-for="subItem in item.lessons" v-bind:key="subItem.lessonTitle">
              <b-dropdown-item-button @click="loadContent(subItem.lessonID)">
                  <div class="lessonIcon">
                  <icon v-if="subItem.active" class="playLessonIcon" name="play-circle-o" scale="1.5"></icon>
                  <icon v-else-if="subItem.lessonComplete" class="completedLessonIcon" name="check" scale="1.5"></icon>
                  <icon v-else class="standardLessonIcon" name="circle-o" scale="1.5"></icon>
                </div>
                {{ subItem.lessonTitle }}
              </b-dropdown-item-button>
            </div>
          </div>
          <div class="mb-5"></div>
        </b-dropdown>
      </div>

      <!-- Tablet / Desktop Screen Lesson List -->
      <div class="d-none d-lg-block">
        <b-btn id="toggleCourseContent" variant="link" size="lg" @click="toggleSidebarDisplay()"><icon name="bars" scale="1.5"></icon></b-btn>
      </div>
      <h3>Course Name</h3>
    </b-row>
    <b-row>
      <div class="d-none d-lg-block">
        <b-col id="lessonList" :class="showLessonList">
          <div class="courseProgress">
            <b-progress :value="percentageCompleted" :max="100" class="mb-3" variant="success"></b-progress>
            <p class="text-center"><strong>{{ percentageCompleted }}% Completed</strong></p>
          </div>

          <b-list-group class="list-group-flush" v-for="item in courseContentList" v-bind:key="item.moduleTitle">
            <b-list-group-item button class="moduleTitle">{{ item.moduleTitle }}</b-list-group-item>
            <b-list-group :id="item.moduleID" class="list-group-flush" v-for="subItem in item.lessons" v-bind:key="subItem.lessonTitle">
              <b-list-group-item button @click="loadContent(subItem.lessonID)">
                <div class="lessonIcon">
                  <icon v-if="subItem.active" class="playLessonIcon" name="play-circle-o" scale="1.5"></icon>
                  <icon v-else-if="subItem.lessonComplete" class="completedLessonIcon" name="check" scale="1.5"></icon>
                  <icon v-else class="standardLessonIcon" name="circle-o" scale="1.5"></icon>
                </div>
                <div v-bind:class="{'lessonComplete': subItem.lessonComplete}">{{ subItem.lessonTitle }}</div>
              </b-list-group-item>
            </b-list-group>
          </b-list-group>
        </b-col>
      </div>

      <!-- Main Lesson Content Area -->
      <b-col id="lessonContent">
        <b-card :title="activeLesson.lessonTitle">
          <p class="card-text">{{ activeLesson.lessonDescription }}</p>
          <b-button variant="danger" class="float-right" @click="completeLesson(activeLesson.lessonID)">Complete And Go To Next Lesson</b-button>
          <div class="clearfix"></div>

          <!-- Only Show If Lesson Is A Video -->
          <div v-if="activeLesson.lessonType=='video'">
            <div class="cardMediaFormatting embed-responsive embed-responsive-16by9">
              <video class="embed-responsive-item" width="100%" height="100%" controls :poster="activeLesson.posterImage">
                <source :src="activeLesson.contentURL" type="video/mp4">
              </video>
            </div>
          </div>

          <!-- Only Show If Lesson Is An Audio File -->
          <div v-if="activeLesson.lessonType=='audio'">
            <div class="cardMediaFormatting theme--dark indigo">
              <div class="audioFormatting p-5 text-center">
                <audio id="audioPlayer" :oncanplay="audioLoaded()" ref="audioPlayer" @timeupdate="onAudioTimeUpdate" @ended="resetAudioPlayer">
                  <source :src="activeLesson.contentURL" type="audio/mpeg">
                </audio>
                <div id="playPauseButton">
                  <b-btn @click="audioPlayPause()">
                    <icon v-if="audioPlaying" name="pause" scale="3" class="pauseIconPosition"></icon>
                    <icon v-else name="play" scale="3" class="playIconPosition"></icon>
                  </b-btn>
                </div>
                <div class="d-flex flex-row justify-content-between mt-4">
                  <div class="text-white">{{ elapsedTime }}</div>
                  <div class="w-100 pt-1 pl-4 pr-4">
                    <input type="range" v-model="scrubBar" :max="scrubBarMax" step="0.1" @input="changeCurrentTrackTime()" />
                  </div>
                  <div class="text-white">
                    <div v-if="startedAudioPlayback">-{{ remainingTime }}</div>
                    <div v-else>-{{ trackLength }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Only Show If Lesson Is A PDF -->
          <div v-if="activeLesson.lessonType=='pdf'">
            <div class="cardMediaFormatting">
              <div class="scrollOnMobile">
                <iframe :src="activeLesson.contentURL" width="100%" style="min-height:625px;" frameborder="0"></iframe>
              </div>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>

    <!-- Page Footer Area -->
    <b-row id="footerBar" class="fixed-bottom">
        <p>&copy; {{ currentYear }} All Rights Reserved.</p>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'TrainingTemplate',
  data () {
    return {
      showLessonList: 'd-block',
      currentYear: new Date().getFullYear(),

      audioPlayer: [],
      audioPlaying: false,
      elapsedTime: 0,
      remainingTime: 0,
      trackLength: 0,
      startedAudioPlayback: false,
      scrubBar: 0,
      scrubBarMax: 0,

      percentageCompleted: 0,

      currentLesson: 'lesson-1',

      courseContentList: [
        {
          moduleTitle: 'Module #1 Title',
          moduleID: 'module1',
          active: true,
          lessons: [
            {
              lessonID: 'lesson-1',
              lessonTitle: 'Lesson #1 Title',
              lessonComplete: false,
              active: false,
              nextLesson: 'lesson-2'
            },
            {
              lessonID: 'lesson-2',
              lessonTitle: 'Lesson #2 Title',
              lessonComplete: false,
              active: false,
              nextLesson: 'lesson-3'
            },
            {
              lessonID: 'lesson-3',
              lessonTitle: 'Lesson #3 Title',
              lessonComplete: false,
              active: false,
              nextLesson: 'lesson-4'
            }
          ]
        },
        {
          moduleTitle: 'Module #2 Title',
          moduleID: 'module2',
          active: false,
          lessons: [
            {
              lessonID: 'lesson-4',
              lessonTitle: 'Lesson #4 Title',
              lessonComplete: false,
              active: false,
              nextLesson: 'lesson-5'
            },
            {
              lessonID: 'lesson-5',
              lessonTitle: 'Lesson #5 Title',
              lessonComplete: false,
              active: false,
              nextLesson: 'lesson-6'
            },
            {
              lessonID: 'lesson-6',
              lessonTitle: 'Lesson #6 Title',
              lessonComplete: false,
              active: false,
              nextLesson: 'lesson-7'
            }
          ]
        },
        {
          moduleTitle: 'Module #3 Title',
          moduleID: 'module3',
          active: false,
          lessons: [
            {
              lessonID: 'lesson-7',
              lessonTitle: 'Lesson #7 Title',
              lessonComplete: false,
              active: false,
              nextLesson: 'lesson-8'
            },
            {
              lessonID: 'lesson-8',
              lessonTitle: 'Lesson #8 Title',
              lessonComplete: false,
              active: false,
              nextLesson: 'lesson-9'
            },
            {
              lessonID: 'lesson-9',
              lessonTitle: 'Lesson #9 Title',
              lessonComplete: false,
              active: false,
              nextLesson: 'lesson-9'
            }
          ]
        }
      ],

      activeLesson: [],

      lessonContent: [
        {
          lessonID: 'lesson-1',
          lessonType: 'video',
          lessonTitle: 'Lesson #1 Title',
          lessonDescription: 'A short paragraph on what the person is going to learn in this lesson.',
          contentURL: './static/countdown.mp4',
          posterImage: './static/poster-image.png'
        },
        {
          lessonID: 'lesson-2',
          lessonType: 'pdf',
          lessonTitle: 'Lesson #2 Title',
          lessonDescription: 'A short paragraph on what the person is going to learn in this lesson.',
          contentURL: './static/demo.pdf',
          posterImage: ''
        },
        {
          lessonID: 'lesson-3',
          lessonType: 'audio',
          lessonTitle: 'Lesson #3 Title',
          lessonDescription: 'A short paragraph on what the person is going to learn in this lesson.',
          contentURL: './static/tcm.mp3',
          posterImage: ''
        },
        {
          lessonID: 'lesson-4',
          lessonType: 'video',
          lessonTitle: 'Lesson #4 Title',
          lessonDescription: 'A short paragraph on what the person is going to learn in this lesson.',
          contentURL: './static/countdown.mp4',
          posterImage: './static/poster-image.png'
        },
        {
          lessonID: 'lesson-5',
          lessonType: 'pdf',
          lessonTitle: 'Lesson #5 Title',
          lessonDescription: 'A short paragraph on what the person is going to learn in this lesson.',
          contentURL: './static/demo.pdf',
          posterImage: ''
        },
        {
          lessonID: 'lesson-6',
          lessonType: 'audio',
          lessonTitle: 'Lesson #6 Title',
          lessonDescription: 'A short paragraph on what the person is going to learn in this lesson.',
          contentURL: './static/tcm.mp3',
          posterImage: ''
        },
        {
          lessonID: 'lesson-7',
          lessonType: 'video',
          lessonTitle: 'Lesson #7 Title',
          lessonDescription: 'A short paragraph on what the person is going to learn in this lesson.',
          contentURL: './static/countdown.mp4',
          posterImage: './static/poster-image.png'
        },
        {
          lessonID: 'lesson-8',
          lessonType: 'pdf',
          lessonTitle: 'Lesson #8 Title',
          lessonDescription: 'A short paragraph on what the person is going to learn in this lesson.',
          contentURL: './static/demo.pdf',
          posterImage: ''
        },
        {
          lessonID: 'lesson-9',
          lessonType: 'audio',
          lessonTitle: 'Lesson #9 Title',
          lessonDescription: 'A short paragraph on what the person is going to learn in this lesson.',
          contentURL: './static/tcm.mp3',
          posterImage: ''
        }
      ]
    }
  },

  created () {
    // Load the right content on page creation
    this.loadContent(this.currentLesson)
  },

  updated () {
    // Let's check to see if we have an audio player
    let audioPlayer = document.getElementById('audioPlayer')
    if (audioPlayer) {
      // Set the player so we can override the controls
      this.audioPlayer = audioPlayer
    }
  },

  methods: {
    toggleSidebarDisplay: function () {
      if (this.showLessonList === 'd-none') {
        this.showLessonList = 'd-block'
      } else {
        this.showLessonList = 'd-none'
      }
    },

    loadContent: function (lessonID) {
      // Let's set the currentLesson to load the right content
      this.currentLesson = lessonID

      // Loop thru and find the right content to display
      for (let index = 0; index < this.lessonContent.length; index++) {
        // Let's check to see if the item matches so we can grab the right content
        if (lessonID === this.lessonContent[index].lessonID) {
          this.activeLesson = this.lessonContent[index]
          break
        }
      }

      // Loop thru the lessons to set the current item and module as active in the sidebar
      for (let index = 0; index < this.courseContentList.length; index++) {
        this.courseContentList[index].active = false
        for (let subIndex = 0; subIndex < this.courseContentList[index].lessons.length; subIndex++) {
          if (lessonID === this.courseContentList[index].lessons[subIndex].lessonID) {
            this.courseContentList[index].lessons[subIndex].active = true
            this.courseContentList[index].active = true
          } else {
            this.courseContentList[index].lessons[subIndex].active = false
          }
        }
      }
      this.calculateCompletedPercentage()
      if (this.audioPlayer) {
        this.resetAudioPlayer()
      }
    },

    completeLesson: function (lessonID) {
      // Loop thru the lessons to set the current item as completed in the sidebar
      for (let index = 0; index < this.courseContentList.length; index++) {
        for (let subIndex = 0; subIndex < this.courseContentList[index].lessons.length; subIndex++) {
          if (lessonID === this.courseContentList[index].lessons[subIndex].lessonID) {
            this.courseContentList[index].lessons[subIndex].lessonComplete = true
            this.loadContent(this.courseContentList[index].lessons[subIndex].nextLesson)
            this.calculateCompletedPercentage()
            break
          }
        }
      }
    },

    calculateCompletedPercentage: function () {
      // Let's loop through and calculate the completed percentage
      let totalLessons = 0
      let completedLessons = 0
      for (let index = 0; index < this.courseContentList.length; index++) {
        for (let subIndex = 0; subIndex < this.courseContentList[index].lessons.length; subIndex++) {
          if (this.courseContentList[index].lessons[subIndex].lessonComplete === true) {
            completedLessons++
          }
          totalLessons++
        }
      }
      this.percentageCompleted = Math.round((completedLessons / totalLessons) * 100)
    },

    audioLoaded: function () {
      // Check to see if the audio player is fully loaded so we can properly access the track duration and other audio API elements
      if (this.audioPlayer !== null) {
        let retryFunction
        if (!isNaN(this.audioPlayer.duration)) {
          // We're OK so let's clear the timeout
          clearTimeout(retryFunction)
          this.trackLength = this.formatTrackTime(Math.floor(this.audioPlayer.duration))
          this.elapsedTime = this.formatTrackTime(this.audioPlayer.currentTime)
          this.scrubBarMax = this.audioPlayer.duration
        } else {
          // It's not fully loaded, let's retry in half a second
          retryFunction = setTimeout(this.audioLoaded, 500)
        }
      }
    },

    audioPlayPause: function () {
      // Let's check to see if we're already playing
      if (this.audioPlayer.paused) {
        // Start playing and switch the flag to show the pause button
        this.audioPlayer.play()
        this.audioPlaying = true

        // Set the startedAudioPlayback flag to switch the remaining time counter
        this.startedAudioPlayback = true
      } else {
        // Pause playing and switch the flag to show the play button
        this.audioPlayer.pause()
        this.audioPlaying = false
      }
    },

    onAudioTimeUpdate: function () {
      // Update the scrub bar with the elapsed time
      this.scrubBar = this.audioPlayer.currentTime

      // Update the elapsed and remaining times for the track
      this.elapsedTime = this.formatTrackTime(this.audioPlayer.currentTime)
      this.remainingTime = this.formatTrackTime(this.audioPlayer.duration - this.audioPlayer.currentTime)
    },

    changeCurrentTrackTime: function () {
      // Change the track time when the user drags the slider bar
      this.audioPlayer.currentTime = this.scrubBar
    },

    resetAudioPlayer: function () {
      // Let's reset the values back to their defaults
      this.elapsedTime = 0
      this.remainingTime = 0
      this.audioPlayer.currentTime = 0
      this.startedAudioPlayback = false
      this.audioPlaying = false
    },

    formatTrackTime: function (timeToFormat) {
      let minutes = Math.floor((timeToFormat) / 60)
      let seconds = Math.floor(timeToFormat % 60)
      seconds = (seconds >= 10) ? seconds : '0' + seconds
      return minutes + ':' + seconds
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #headerBar, #footerBar {
    background-color: var(--indigo);
    color: var(--white);
  }

  #headerBar {
    padding: 20px 0 10px 15px;
  }

  #footerBar {
    padding: 20px 30px 10px 30px;
  }

  #smallScreenCourseContent, #toggleCourseContent {
    color: var(--white);
    margin-top: -.25rem;
  }

  #lessonList {
    min-width: 300px;
    max-width: 300px;
    padding: 15px 0 100px 0;
    min-height: 100vh;
  }

  #smallScreenLessonList {
    min-width: 350px;
  }

  #lessonContent {
    padding: 20px 30px 100px 30px;
    background-color: #fafafa;
    min-height: 100vh;
  }

  .container-fluid {
    padding: 0;
  }

  .courseProgress {
    padding: 10px 15px 20px 30px;
  }

  .list-group-item {
    border: none;
    padding-left: 30px;
  }

  .lessonIcon {
    float: left;
    padding-right: 10px;
  }

  .playLessonIcon {
    color: var(--indigo);
  }

  .completedLessonIcon {
    color: var(--green);
  }

  .moduleTitle {
    font-weight: bold;
    background-color: #f0f0f0;
    border-top: 1px solid #cacaca;
  }

  .lessonComplete {
    color: rgb(170, 170, 170) !important;
  }

  .cardMediaFormatting {
    margin-top: 15px;
  }

  .scrollOnMobile {
    overflow:auto;
    -webkit-overflow-scrolling:touch;
  }

  .audioFormatting {
    background-color: var(--indigo);
  }

  #playPauseButton button {
    background-color: var(--red);
    height: 100px;
    width: 100px;
    border: none;
    border-radius: 50%;
  }

  .playIconPosition {
    margin: 9px 0 0 12px;
  }

  .pauseIconPosition {
    margin: 9px 0 0 1px;
  }

  input[type="range"] {
    width: 100%;
  }
</style>
