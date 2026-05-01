"""Backend API tests for Smart Your Company marketing site."""
import os
import pytest
import requests

BASE_URL = os.environ.get(
    "REACT_APP_BACKEND_URL",
    "https://biz-portal-69.preview.emergentagent.com",
).rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Root endpoint regression
class TestRoot:
    def test_root_hello_world(self, api_client):
        r = api_client.get(f"{API}/")
        assert r.status_code == 200
        assert r.json() == {"message": "Hello World"}


# Contact form endpoints
class TestContact:
    def test_create_contact_valid_payload(self, api_client):
        payload = {
            "full_name": "TEST_Jane Doe",
            "email": "TEST_jane@example.com",
            "phone": "063 000 0001",
            "service": "Company Registration",
            "message": "TEST_Please help me register my business.",
        }
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert data["full_name"] == payload["full_name"]
        assert data["email"] == payload["email"]
        assert data["phone"] == payload["phone"]
        assert data["service"] == payload["service"]
        assert data["message"] == payload["message"]
        assert "created_at" in data
        assert "_id" not in data

        # Verify it is persisted via GET list
        lr = api_client.get(f"{API}/contact")
        assert lr.status_code == 200
        lst = lr.json()
        assert any(item["id"] == data["id"] for item in lst)

    def test_create_contact_invalid_email(self, api_client):
        payload = {
            "full_name": "TEST_Bad Email",
            "email": "not-an-email",
            "message": "TEST_message",
        }
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_missing_full_name(self, api_client):
        payload = {
            "email": "TEST_missingname@example.com",
            "message": "TEST_message",
        }
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_missing_message(self, api_client):
        payload = {
            "full_name": "TEST_No Message",
            "email": "TEST_nomsg@example.com",
        }
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_empty_full_name(self, api_client):
        payload = {
            "full_name": "",
            "email": "TEST_empty@example.com",
            "message": "TEST_msg",
        }
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_list_contacts_excludes_mongo_id(self, api_client):
        r = api_client.get(f"{API}/contact")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        for item in items:
            assert "_id" not in item
            assert "id" in item
            assert "full_name" in item
            assert "email" in item
            assert "message" in item
            assert "created_at" in item
