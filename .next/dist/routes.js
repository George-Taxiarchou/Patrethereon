'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', 'campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', 'campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNFLEFBREYsSUFDTSxBQUROLGtCQUN1QixBQUR2QixpQkFFRSxBQUZGLElBRU0sQUFGTix1QkFFNkIsQUFGN0IsbUJBR0UsQUFIRixJQUdNLEFBSE4sZ0NBR3FDLEFBSHJDLDZCQUlFLEFBSkYsSUFJTSxBQUpOLG9DQUl5QyxBQUp6Qzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndGF4L0Rlc2t0b3AvUGF0cmV0aGVyZW9uIn0=