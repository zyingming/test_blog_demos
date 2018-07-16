Mock.setup({ timeout: '1000' });
Mock.mock('http://test.com', 'get', function() {
    return Mock.mock({
        "user|10": [{
            'name': '@cname',
            'id': 88
        }
      ]
    });
});