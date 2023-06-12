import torch

"""
    torch.empty

    empty/random number array
"""

# scalar
x = torch.empty(1) # 1x1
print(x)
# tensor([0.])

# vector
x = torch.empty(3) # 1x3
print(x)
# tensor([0., 0., 0.])

# matrix
x = torch.empty(2, 3) # 2x3
print(x)
# tensor([[0., 0., 0.],
#        [0., 0., 0.]])

# mutilmendiseon
x = torch.empty(2, 3, 3) # 2x3x3
#x = torch.empty(2, 2, 2, ..n)
print(x)
# tensor([[[0., 0., 0.],
#          [0., 0., 0.],
#          [0., 0., 0.]],
#         [[0., 0., 0.],
#          [0., 0., 0.],
#          [0., 0., 0.]]])

# torch.rand(size)
x = torch.rand(5, 3) # 5x3
print(x)
# random antara 0-1

# torch.zeros(size), isi dengan 0
# torch.ones(size), isi dengan 1
x = torch.zeros(5, 3) # 5x3
print(x)
# tensor([[0., 0., 0.],
#         [0., 0., 0.],
#         [0., 0., 0.],
#         [0., 0., 0.],
#         [0., 0., 0.]])

# dapatkan sizenya
print(x.size())
# torch.Size([5, 3])

# dapatkan typenya
print(x.dtype)
# torch.float32

# menambahkan tipe secara spesifik, default=float32 
x = torch.zeros(5, 3, dtype=torch.float16)
print(x)
print(x.dtype)
# tensor([[0., 0., 0.],
#         [0., 0., 0.],
#         [0., 0., 0.],
#         [0., 0., 0.],
#         [0., 0., 0.]], dtype=torch.float16)
# torch.float16

