'use strict';

describe('Testing the filter', function () {

  // load the controller's module
  beforeEach(module('contactsApp'));

  var scope, $filter, data;
    data=[
            {
                "name": "leanne graham",
                "email": "leanne@gmail.com",
                "job": "web developer",
                "location": "london",
                "tag": "friends",
                "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
            },
            {
                "name": "ervin howell",
                "email": "ervin@gmail.com",
                "job": "tech lead",
                "location": "london",
                "tag": "friends",
                "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
            },{
                "name": "clementine bauch",
                "email": "clementine@gmail.com",
                "job": "web developer",
                "location": "liverpool",
                "tag": "following",
                "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
            },{
                "name": "chelsey dietrich",
                "email": "chelsey@gmail.com",
                "job": "baker",
                "location": "london",
                "tag": "family",
                "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
            },{
                "name": "dennis schulist",
                "email": "dennis@gmail.com",
                "job": "pen tester",
                "location": "manchester",
                "tag": "acquaintance",
                "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
            }
        ];
    
  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$filter_) {
    $filter = _$filter_;  
  }));

  it('should capitalize a string', function () {
        var filterString = 'leanne', result;
        var expectedResult=[
            {
                "name": "leanne graham",
                "email": "leanne@gmail.com",
                "job": "web developer",
                "location": "london",
                "tag": "friends",
                "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
            }];
                
      result = $filter('filter')(data, filterString);
      expect(result).toEqual(expectedResult);
  });
});
