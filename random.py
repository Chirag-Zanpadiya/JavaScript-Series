# # # # nums = [1,2,3,4]
# # # # srd = list(map(lambda X : X**2 , nums))
# # # # print(srd)


# # # name = "chirag"
# # # print(len(name))

# # # f = "apple"
# # # cnt = f.count('p')
# # # print(cnt)

# # # v = "chirag zanpadiya"
# # # print(v.title())
# # # print(v.lower())
# # # print(v.upper())


# # # print(v.find('a'))
# # # print(v.rfind('a'))
# # # v = v.replace("chirag" , "ZCA")
# # # print(v)


# # # x = 5 

# # # if x > 10 :
# # #     print("chirag")
# # # elif x > 4 :
# # #     print("prashant")
# # # elif x > 3 :
# # #     print("Jay")



# # L = [6,5,4,3,2,1]
# # # L.pop()
# # # L.append(7)
# # # L.remove(5)
# # # L.reverse()
# # L.sort()
# # print(L)/


# # T = (1,2,3,4,5,6)
# # print(T[::-1])
# # print(T[0])
# # print(T[1:3])
# # print(T)


# # S1 = {1,2,4,5}
# # S1.add(6)
# # print(S1)


# # D1 = {"college" : "GECG" , "city" : "Gandhinagar" , "type" : "ENG"}
# # print(D1.values())
# # print(D1.keys())
# # print(D1.items())




# # n = int(input())

# # a = 0
# # b = 1
# # while(a <= n):
# #     c = a +b
# #     print(a , end=" ")
# #     a  = b 
# #     b  = c

# # str1 = input()
# # str2 = input()
# # pos = int(input())

# # res = str1[:pos] + " " + str2 + str1[pos:]
# # print(res)

# # import BeautifulSoup
# # html_doc = "<html><body><h1>chirag</h1></body></html>"
# # soup  = BeautifulSoup(html_doc , "html.parser")
# # head = soup.find("h1").text
# # print(head)



# # magic fns 


# class Point:
#     def __init__(self ,x ,y ):
#         self.x = x
#         self.y = y
#     def __add__(self , other):
#         return Point(self.x + other.x , self.y + other.y)

# p1 = Point(1 ,4)
# p2 = Point(2 , 8)
# p3 = p1 + p2
# print(p3)
