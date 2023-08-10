# from django.test import TestCase
# from django.contrib.auth.models import User
# from .models import Post, Category

# # Create your tests here.
# class TestCreatePost(TestCase):
#     @classmethod
#     def set_up_test_data(cls):
#         test_category = Category.objects.create(name='django')
#         test_user = User.objects.create_user(name='user_test1', password='12345')
#         test_post = Post.objects.create(
#             title="Post Title 1",
#             excerpt="Post Excerpt 1",
#             content="Post Content 1",
#             slug="PostSlug1",
#             status="draft",
#             category_id=1,
#             author_id=1
#         )

#     def test_blog_content(self):
#         post = Post.post_objects.get(id=1)
#         cat = Category.objects.get(id=1)
#         author = post.author
#         excerpt = post.excerpt
#         title = post.title
#         content = post.content
#         status = post.status

#         self.assertEqual(author, 'user_test1')
#         self.assertEqual(title, 'Post Title 1')
#         self.assertEqual(content, 'Post Content 1')
#         self.assertEqual(status, 'draft')
#         self.assertEqual(str(post), 'Post Title 1')
#         self.assertEqual(str(cat), 'django')