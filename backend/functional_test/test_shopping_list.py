from selenium import webdriver
from shopping_list.models import ShoppingList
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from django.test.testcases import LiveServerThread
from django.urls import reverse
import time


class TestShoppingList(StaticLiveServerTestCase):
    def setUp(self):
        self.browser = webdriver.Chrome(
            executable_path="functional_test/chromedriver.exe", port=56734
        )

    def tearDown(self):
        self.browser.close()

    # def test_text_main_page(self):
    #     self.browser.get(self.live_server_url)
    #     wrapper = self.browser.find_element_by_class_name("gFEKWn")

    #     self.assertEquals(
    #         wrapper.find_element_by_tag_name(
    #             "h2").text, "Make your shopping easier!"
    #     )
    #     time.sleep(10)

    # def test_redirect_to_shopping_list(self):

    #     self.browser.get(self.live_server_url)
    #     redirected_url = self.live_server_url + "/#/auth"

    #     self.browser.find_element_by_class_name("kznmFO").click()

    #     time.sleep(4)

    #     self.assertEquals(
    #         self.browser.current_url,
    #         redirected_url
    #     )
