const { e2e } = require('pactum');

const test_case = e2e('Add User');

const step1 = test_case.step('Post User');

const runtests = () => {
  step1
    .spec()
    .post('https://i.timermachine.com/.netlify/functions/create_surl')
    .withBody('https://i.timermachine.com/guide')
    // .withJson({
    //   url: 'https://i.timermachine.com/guide'
    // })
    .expectStatus(200);
};
export default runtests;
