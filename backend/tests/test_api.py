import unittest
from api.app import app

class TestAPI(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()

    def test_get_visit_count(self):
        response = self.client.get('/visitcount')
        self.assertEqual(response.status_code, 200)
        self.assertIn('count', response.json)

if __name__ == '__main__':
    unittest.main()
