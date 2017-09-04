app.models.FilterModel = Backbone.Model.extend({

  defaults: {
    sort: '',
    include_docs: true,
    q: null,
    taggers: [
      {
        name: 'All',
        cnum: '',
        email: '',
        count: 0,
        isSelected: true // optional field. Needs to be set to false when deselecting user
      }
    ],
    queryTargets: [
      {
        label: 'Activity',
        value: 'Activity',
        isSelected: true
      },
      {
        label: 'Channel',
        value: 'Channel',
        isSelected: false
      }
    ],
    actionStatuses: [
      {
        label: 'Add tags',
        value: 'Active',
        isSelected: true
      },
      {
        label: 'Remove tags',
        value: 'Inactive',
        isSelected: true
      }
    ],
    pageModes: [
      {
        label: 'Tags In Your Tag Subscriptions',
        value: 'Subscription',
        isSelected: false
      },
      {
        label: 'All tags',
        value: 'All',
        isSelected: true
      },
      {
        label: 'A specific tag or tag group',
        value: 'Specific',
        isSelected: false
      }
    ],
    luceneParams: {
      groupId: null,
      tagId: null,
      targetId: null,
      fromDate: null,
      toDate: null,
      status: null,
      target: null
    },
    tagGroups: []
  },

  initialize: function() {

  },

});