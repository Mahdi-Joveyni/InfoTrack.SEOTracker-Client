<template>
<div>
  <a-card>

    <a-row>
      <h3>Search Keyword : </h3>
    <h3>{{tracker.search}}</h3>
     <a-divider type="vertical" ></a-divider>
     <h3>Url : </h3>
    <h3>{{tracker.url}}</h3>
    <a-divider type="vertical" ></a-divider>
<a-button type="primary" :loading="loading" @click="submit" >Track now</a-button>
<a-divider type="vertical" ></a-divider>
<a-row class="ml-1"   v-if="!isFirst"
     >
          <h3>Ranks : </h3>
          <h3>{{currentTracker.length>0 ? currentTracker:'Not Listed'}}</h3>
    </a-row>
  </a-row>
    </a-card>

  <a-table :columns="columns" :data-source="tracker.histories">
   <template #bodyCell="{ column, record }">
      
      <template v-if="column.key === 'insertDate'">
        <span>
          {{moment(record.createDateTime)}}
        </span>
      </template>
        <template v-if="column.key === 'ranks'">
        <span>
          {{record.ranks.length===0 ? 'Not Listed': record.ranks}}
        </span>
      </template>
    </template>
     </a-table>
          </div>
</template>
<script>
import moment from "moment";
import TrackerService from '../Stores/TrackerApi';

export default {
 props: {
    refresh: Boolean
  },
  data() {
    return {
      tracker:{},
      loading:false,
      isFirst:true,
      currentTracker:[],
       columns :[{
            title: 'Ranks',
            dataIndex: 'ranks',
            key: 'ranks',
            }, {
            title: 'DateTime',
            key: 'insertDate',
            dataIndex: 'insertDate',
            }]
    }
  },
  async mounted(){
    await  this.fetchTracker(this.$route.query.key);
  },
  methods: {
  moment: function (date) {
    return moment(date).format('DD/MM/YYYY h:mm:ss');
  },
 async fetchTracker(key){
  this.tracker =await TrackerService.GetTrackerByKey(key);
  },
   async submit(){
      this.loading=true;
      this.currentTracker.ranks= await TrackerService.GetGoogleRank(this.tracker.search,this.tracker.url);
      this.loading=false;
      this.isFirst=false;
      await this.fetchTracker(this.$route.query.key);
    }
}
}
</script>
