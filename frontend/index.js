const block = document.getElementById("block");
const hole = document.getElementById("hole");
const character = document.getElementById("character");
let jumping = 0;
let counter = 0;

document.getElementById("game").style.backgroundImage = "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUQEBISFRUVEBAQEBAXFRAVEBEQFhUWFhYVFRUYHSggGBonHRUVLTEhJSkrLi8uFx8zODMsNyktLisBCgoKDg0OGhAQGi0lICUtLS0tLystLS0tLS0tLy0tLSsuLS0tKy0tKy0tLS0tLSstLS0tLS0tLS0tKy0tLS0tLf/AABEIAJEBXAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABAECAwUGB//EAD0QAAEDAwIDBgMGBgEDBQAAAAEAAhEDEiEEMQVBURMiMmFxgQaRoRQWQlKxwRUjM2Jy0fBDgrJTY6LC4f/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAA8EQABAwIDBAcGBAUFAQAAAAABAAIRAxIEITFBUWFxBRMigZGh8BQVorHR4jJCYsFSgpLh8SNDU7LCM//aAAwDAQACEQMRAD8A9p9ub+cfNH8RYN6g+a8fCIX1Psbd6+F95P3eZXsDxqk3/qT6AlZVfiZg8ILvovKQiFPsVPah6Tr7IHriupxHjT6uIAH1XKUwiF0sY1ghoXFUqvqG55kqFCtCIV1nKqhWhEJKmVVCtCISUlVQrQohJSVVCtaptSUlUQrWotSUlVQrWotSUlVQrWqbUlJVEK1qLUlJVUK1qLUlJVUK1qm1JSVRSptRCSkqEK0IhJSVVCtCISUlVQrQiElJVUK0IhJSVVCtCISUlVQpUwkpKqhWhEJKSrwiFe1VhZyqqIRCmFa1JUKkIhXtRakqVSEQr2otSUVIRCvai1JRUhEK9qLUlFSEQr2otSUVIRCmEQkqFEIhTCtakoqQiFe1VhJRRCIUwrWpKKkIhXtUWpKKsIhWhSGJKlUhEJyjw6o7ZhTTOA1j+BUdVYNSFq2hVd+Fp8FyYUQu393a35fqFU8BrD8H6KvtFP8AiCucJXH5D4LjQiF038Iqj8BStTRvbu0q4qNOhWTqT26tPgloUwrlhCrCtKoohEK0KbUlQqQiFe1FqSpVIRCvai1JRUhXp0HO2BKvSIBkiV6jhfEaAEQGnzCxrVXMEtbK6sNQZVdDnhq4NLgtZ2zPmmPu1W8vmvVt1zD4XA+4QdUVwnG1Z0AXrt6NwwGpPevD2KLFvYixd1y8WFhYixb2IsS5RasLFIpraxPcPexp74VXPgSrsphzoJjmkKeje7ZpKZp8ErO/CvVafV0o7pA+i2Oo6QuF2MqbGxzXrs6MokSXzyXlh8O1ug+ak/Dlby+a9KdSVX7UVHtVXgr+78KN/ivMu4BWH4R81i/hFUbsK9a3UlajUdYHyT2yoNQE920DoSF4N+mc3cEeyzsXttXraMd6D5DK8tqiHOJaIHILpo1y/VsLzsThWUfwunhtSRYixb2IsXRcuO1YWIsW9iLEuU2rCxFi3sRYlyQsLEWLexFiXKLVhYgsW9iLEuUwsQxem4PS04EyC5efsUhsLKq28RMLfD1epddaDzXuRVAHdA9lQ6krxzKrhsStm654/EVx+yRtXqDpSdQQvUHVFS3VLzP29/5lP25/5lHspT3jzXqW6ieSiq+nHfj3heVdqXnd31WLjO5QYTih6T3NnmmeOmicUxnmRsuPYmHNRYu6mLGxK8iq7rHlxEckvYixMWKLFe5Z2rCxFiYsRYlyWpexFiYsUWJclqwsRYt7EWJclqxAVr3dT81pYpsS5LSmLEWJixFiwuXTal7EWJixFiXJal7EWJixFiXJal7FYEjYlbWItS5LVQVn/mKt9of+YqbUWKuSt2t5VDWf+Yqhk7kraxFimVBBOqwsUFiZtRapuUWJaxFiYsRYlyWpexFiYsRYlyWpexFiYsRYlyWpexFiYsRYlyWpexFiYsRYlyWpexFi3LUQlyWrCxFi3hEJclqwsRYt7UWpclqwsRYt7UWpclqwsRYt7VNiXJal7EWJixFqXJal7EWJi1FqXJal7EWJixFiXJal7EWJi1FqXJal7EWJi1FqXJat+zR2aZsRYsLl02Jbs0ClKZsRYlyWK1LhjjvAW44SOblRld45rT7S7oFkTU3rqaKAGhUfwpv5j9EHhI5OR9oPRT9pd0H1Uf6m9Wih/D81i/hThtBSj6BbghPO1Dzzj0WLmk7q7XO2rCoymfwApXs0dmmbEWK9yzsS7WZyJHSYd8yCrVWsIFrXjeS6DO8RGOqvVIa0udgASSubouMtc+HPFrjFt3hHKByP6z6rkrYhtJwknx816mDwNTFUnhoaI0MZk6xM+Z3hOWI7NMmn7+Y2I6jyRYuu9eX1cZEJbs0dmmbEWJcosS3Zo7NM2IsS5TYluzRYmbEWJcosS3Zo7NM2IsS5TYlSxFiZNNHZqblWxLWIsTPZo7NLksSzaZOyYZw958lZrSMhbiu71VHOdsWrGM/PKoOGdXBH8NH5lr256KvbeSpdU3rW2ju+azPDTycFk/QOHKU1256KjqzjzUhz96q5tGMgfXNImkjs0yWKLFpcsLEvYixM2IsS5LEt2aOzTNiLEuSxLdmjs0zYixLksS3Zo7NM2IsS5LExYixdZ3DQR3HSeh5+6RLOS46dZtQS0r0auGfSMPCXsRYt7VNqvcs7EvYixb2otS5LFhYixb2otS5LFhYixb2qHsMYifMSEuSxY2IsWljuh9Zlresshv6opieZJBh0ttg7wBJ5Ec+agPnKFo6hAmQeR/bVLalncdP5SD7hY8MpacF4e64OtdYWuIYR06b+Wy24m25optdDnERmPmUlw/glVxfc60hw7N0y1wzvjyHzXHiXEvA+v7L08DTptpy6ZO4fVdSpTgkKtiZdp3NaGuMkC27cf/qyFM8wHGYm+0Annbs70ldQq9kEj5Lzzhh1hYDtykHPyKzsRYtWN/ymc3Boz5ROPfqr2K9ywcwAwl7EWpixFim5Ral7VNqco6cHxODenMn2Wr+H4uYbo3EQfbqs+vYDbOa1GGeRIHrlqudahtOf+cltYt6OjcRNpgiPYqX1LWkqtOle4BZaFzHGLAfOTJW+u0ADb2YAi5u8TzCV1EMcA0QZNzRyHmE/Rq3Md/iV5TK9RtUS6ZML1KlCmWEWjTJcu1RYmLEWL2Ll5FiWtU2LYPY0w7J3t2geae+xB7L2AjymQVU1ANVqMM5wyXLsRYt7FNitcsrUtYpsTFiixLksWFiLExYixLksS9iLExYixLlNiXsRYmLEWKLksS9iLExYotS5LFhYixMtpyYTLGUo2LvOd/qoL4Vm0pRpNQ8iNhyPkraxnfPt+gWGlOOg6805Xb3vYfoF4vR5h55fuvcxwmmOf1SvZqXUSNwfkkuL600i1oxIJJ8tl1OC1xUaZ8vqvULoErz20JidqXsRYmq1GHEfL0VbFIdKzNKMkvYixMWLlca4idPYA0G8u3nAbHT1UOqBokp1adsUWJbXcSFI0hYT2gJ38IFvl/d9F0rEFQEwo6tePOr1D67nMp1DY6G22loAO24912dNVc0ntC43GWsOOzJ5F2w6QAdh7bcHabnnvRLgB3bS68mQN9sey5fF9EW13CTkl4Ac7EzhcYb2pBO9ewa807HNBGmmz0ExxTVQ4WMzgY3i6Pnk7dB1VNNrH0iJwHOc3OQCA0h0OmAbojO2N4SOqDqTWvbB7sAuJIGXuJPsz9Fvwsu1dIteGXthzXi4NtdIII691WJEwT6381mAbbmiPWkLt/bargL6RLd5aQHA7ehXm+K16tWtbSY9zB4QLQfMmTvhdHUcEdTplxqeHdoc+I8jKrwukbgG3DFNxIIiATIM7gqCJaROSv18VBUDAHb/AEVpo31xUaKjKvfZbUkS1rhgPuBIHmPJdOxPhne5+DHp3lyOGcRFdz2hpFjiJneCW/stKLg0ROpXJjD1rg4gTCZsUWJmxZtqtD7XD3ytKtcU23Fc9PDuqGAuTrapFY52MAeQXT0WreY5fukeNaYMqB8yHyc8iNx6ZC1o1HBhcB4W3Bec3t6bV3PBaU7Vpw5xjALiOmJISfDuIOu70uzMdEzwfWmo6HEnBnz8ks6iKddzWDEgjpBEx9V04kGRK2wIa0OjaVpxgd5j4Ac4ODo52xB9crp09OBSLuZbJ6ZC5nFCD2WZ/qf/AFT+m1JcwsPQwecLmYReCeCVQLnDn8knYpbRJ2TFiT1VQse0ztGF34iuabLgJPFedh8MKj7SuZxekWVueQ0/Tku1wfWgMDDMzjzlLcZeKlFroyHtg+RBkfQLLhYF7btpU4eoK9G4jf4hbVWGlVjl5pt1PPuosW9QRJPKSfbKz4ZrRUdaQBM4halxiVytoyVWxRYnNRQtdA23CzsQPkSoNIgwUvYixM2Kj2YPof0S5BSS9CpTcYknlIgBM6jSW55H5ryvDHuDt+a9hT1jap7LM2B5PJuYjz2VXuLQDs2robh2uloGexJ2IsTDqcGFFitcubqlhYixMWKLFNydWsAzB/xK4jtWWkidiu3rSW03kfl/cLhaTSue24CcnOMlULwDJK2YzswAuzpROTtuQuq9vToP0XkD8VNH9OliffEdVrR+NmXW1Kbm+Ygj6Ly6DeqdmV6FR/XM7IMLb4p8bB/aT9VWjWcyk4tMGx36K2r1lHVEPplz7WZawS8GScjpkLlP4+Wy2nTY2IH8zxT5h2foF39c0NjWVzHskOOghexpakGgHuw1rLiT0AyZSug4myq17vCGETJGx2K4nDdbra+WdkGglpcXbewz9F3KVEhv86oH9Ra0M+Rk/VYNqQr1je67TzTOl1DKoljgfmCPY5XM+IuG9t2RBdLagb3dgxxFzjjkAmqZYz+m1repAE9d1SpqOpR9SRELAuaBmqcR4e2o6iYns3ZJJH8u3IEc5DfqmqmoPINHrJ/0uYdXLQS1zLnACdjIkSRgHyOcKxpuwSDBIExG8kb5jG6p1jjmFasx9I2vbB9aEZEcQtdOTTm0tcSSdtskpbX3PeHG0u5A+GPMD1WzcNvtdADjdyhpgnfYFLOc5zw4AwJknBI6W/7XK7EiDa4StKdGsXgPaY9evqV0KmrbUAa+g19uYvIaMEYx0JWFPUBgLKdJtNhaBAJLpBxk+6oQDuflusKNc25zBOeZylKuX669y0xZq0tD2SmKmoc8Wnb/ABb/AKVdHRFMzdMQMxy9FmdW0DOw54HzUN1jKgBaQQZhwIIMb7bwrmsGZF3iQvPD3arsDU5uEbRGI5/7XO4PoRRrV6hkNe8GnLmkFpAc4wBjvSPSEBmJnC8/xbjJc2m2XMpPfVY+oQJYWyGuMggC4GZG2VlXxgojPXMgb9fJateX7F6vU8a01Nwa+q0OcYY2cvd+VvU42SrtQKlSWzEDEZHqOS+dcXoQ5jJdUJBvlrKjHBzXPNhA7hAzLIm/nC6tBztKJN7bmNcW1D2dM18MZ/NzEiJJ5gCNl51XpOq8CYg7BMnv5cCDt4elh8NV6k4lsWjIic9hMDhI1+eS9nxtpaKU5y8/+KvoBMNdJva4RMQMTlIan4hohrRXY5zwG3NaJLLuYdieW3yV9RxXSU7XtrnEG1oLyGu6xtHzXsUILGubpqFgKtN1SXEd6e1WjFFwLCYO3VrhE591SvT/AJxkyLac9PCMyseL8Wotpse2o1/dLw0EXkENju7j32XjuJ8Vr1u9cGgkQByAwJ5cgJK6qz7mNB1UtcKb3ObEc/8AJ8l7fX6mkbB2jBbeOu8bRjkltTqaTqZYyuGXEBzok2dBDhEmF4l1FpaZcXbGJJIHqqazRtDCQOXMg/ILjvAOYzWhpGr2g4Z7v8r232tzaLaVGtTLhMvcCCRMgAEEfPyVH16jng1WgEAAEGWuHUHb5Lxx0zmsuY5wIaDud+pCf4fxevQgvAe38TTz5z0R7+tbb4KjaLqDr9QNfR+q9txQW6YR+JzAT9f2SXDgS4c4ISNX4upmmLKRzkh8FrD7465WB+LqzQSGNLYnEDHsF1UKoo0rSFjU/wBaobdeX917F5bdYd3B3KcbSuOdI7T1ImebXDn7ciuZpfi1jiH1ab2OiLh3mwupxLiVI06dW9thDodIE7YA3JwcBa0awc6JyV6lNrac5gjf6jwK7DJLWl25bKtYvO8P+LKRNlTutEAVJJj/ADEd0fNei7dlnaXssguvubZaOd20KbhsWDS12YRYstQ3uO/wd+hSJ+JdLe1gqzcYDgHGmDMQXRA9dvNYcX+IKYaW0C2o4y0kGWM5GSOedlDqgaJJVmNuMNzXJ0GldMkQOp7rfmU/RrUqdXtH1WeANLQTMyTvsvN6l9aq4NqPgFp2kY9eQ9FB0FMFoInfM5J81z1MZcIAyXXTw72G6YPivS8U1lOs9pbqGtAghoBJLpyZB9OS2ra+o54NF9NzR+CYLsc7h16FeMr6FgewARJ9T7xyWx076TmmkSJJFu7Y3wsxiFR2DJkzmvoWlcXsDi20kZbnBGCtbF5DQ/E1SliqwubIEjl/z9k1rfiuP6bQG8nOgE+krpbWBC53NDfxLs8Yb/If6D9QuXw538lno7/zcuZW+K6gEPphzSYInf8A5+ykcc08AFlVsAgNG0ST16krmxNQVadrd8/NdNJjqbpIPh9JXPY7SN2tDu5fV7S4uaAZhpwCTG/RTSo6WMVO+ZudewtIJMQDnaPLfdYH4iqN/qUA27FImILtgMTBnkVA+Iqg3oTZHbODe7jcg/6XjHpQn/b+Py/DpwWQoYhoyYcv06bdnLXXZMp7Q9hSIIqOabbahDqZLpi4AnIGN8nPksKOi0oJ7R/duNlr24YSYuBb4vD5YWI+IKtP+rSac3FzdhTPMxzBICBx6u3x0AQTcLR4aX92dwE96Pz7B/rHl2EdhMROdP8AD+mf3z35czlozwx1OgQ9r29oSGuN4tNPGNpJ+WYVOI8bfUltN7afcDrjN7m964sG5It2GcrAcfqkwKLSaknTt5gD830OeqkcdruNzKLSALXMiKgq8yJ5bc1jiOka1QQ1tv8ANx5CBwUNwVfTqz4cJ8YI47NhWfDeMvYLK1UFwpEukOAhmS++1oJII3iI5bnp6vXCwk47odAyeRAIbM8tpSB49qDltFuG2OadzWO8f2g78so+8lTwiiA5hDqzSM2bQB1zy6LHD4upSJ7MjddkDvHZy5bd6scLiQ5rmsIOoMbs/wBvpqJ00vxM3UAFwgtL3viXfzAYaSBgfigATnZM6b4qp1f5NsOgMdiXYzdJPdaMDr5YSX8frOwyiGF2abniGmMun269UfeR57oohr3C2mSO72gw4HOQD+i2b0hUAAFMZZ7Nc8x2cjmc+a0czFPIc9rjMN0jLLXmSDJgeEDeh8TM7XsRTHdpljHQ4vdcS64SRbAuyRz3XU+1t5keZnZcP7y1N/sxgd1zo2dsAM9eiPvDVp92rSDi3xOYDaZ8ER1MhYjFuH5Pi/sujrcVbc+mT3Rv4aZd3eulqeJU3AAFkc5OPlzU/wAVptHjEAScYiFzRx+tT/q0QYNzntHdDDzkcxtsgcdreHsWF7jexuxbR/unE4+oXS3pFzBDafxfaFx18Liqj+2w5Zabzsz89IzKU1HE21CbrzTmx1twscXEtc447paCD0IOFjpqg0xYbaYY4kdpe4Btze0ta6DLCQMn64K6DeOah3ep0WlrhY1uzhUG5dPKf0U/x6u7LKLS0ixrOfaDcmdm4IXnuqvcTI11k+uPDhkrNwleBFM6T3fty14aw47VOfpSC8sc+lkwAWnY7OImPNfP+H6txqijVa59NxLYvMgnwvaDguke8wvafeR34aMBk9syDdJwMevRR/HazsMoNY6bm3iA6kN/QkxErp9sd1bWGnMCJu8DoIVKeFrzAYc+EbY1yC863UFjmsrSaLQbQC1tWiQ4dm9hwbpnE8yh3FGl9zalUtd3atKsTVssJAhpcLjOTacL0Z+IalTu06IDiZY54Ntg3JnzBCj7w1D3RQDHuxTLhDZ/ETvgLDrSTJZnz/trpnwHGbihXIHYdnluz47Nup8cjDuiGnDQ+oNO4uaWyA5oDYABbTcSB7rZlbRtLSGtFtsNlzu8PxE3Cdhj16rmfeV8X9j3Gi15/wDd/KOcT7ZUjjmopj+bRa4DxPbFrp8MRnfyXZQx7qVMU7CY3vz/AOuzZwVPZsRBIYYH6Rx4TsPy2gLr63X6arF7r4LiGkw0E+TInaP3SNPR6a4OnZznWlxIIIw3EQAem8BLDjldmalFpDcuc2NjkfLMkI+8lQ5FG4PJNGASbds++c8itm9KuaIbSy4P+313I/CYiSHMPhJ1jXPy56Zrq9npIEtY2GgQC90iIyS4TuT6/WuqOjIhzrRjutJjHrlcwcfq+M0m2xZZ/wBUV/n4Zwo+8NUm9tEFgFjmx/ML+cDeAce6gdJn/i8Xz/5Vhh8W0wGkZTkPWfDXgukOJ6VsNDQ5vRzWkfMnJ23VK3FNI6O5TIHL8PrA5rn/AHjf4jSDWsgVgQbrjsB6YUnjdc9wUWNeTe24d00d/QHYeUoOlCDIo/H9qez4t5ALXZ8OPHLUbe/Ypov0gfIcCLSOzcS5pJJ72CDMGMYxPMpl+p0jzLrIBaRTyGwAAW9eW889kseOag9wUWteTc0mLRTG5O+Z/UI+8VQYfQDS+RROIk7bTnyKk9KuOtP4/t81UYXENE2HP9PLZ3jh4GHHM0riDAtBd/LvPMYgmDIPn5eavVbQdT7MOgh0teXF1NmSS1rcRJJyZPmkD8R1BvQm2BVcB3ZGCZ9eigfENWnitSaSDc5zQbbD4TjnOFX3o6cqZ/r+1Q7DYi0ywxt7PONk5RGWnemq2n0pAtaGkHvOve4OYRBaCTg85hXqaymG9m2oxtLtA40QXElg3ZdIiflukxx+sz+pRBE3S0YbS/u8wgcfrbCi0uqS6g3Ehg/NPPnnqFI6VcMurJ/n+30OSHB4gOIs3flHL0BlGZ0yYb9iALXNJlzXXXyQ2ZLWtmG4xOUU/s4cezfaC42mTe2mREETBzmd0sOOV3d6nRaWxaWQBUFXrnlkfJH8c1Byyi2AOztO5rczJPhBB8sqferttP4/tVhhMTkRTO8dkD6GeCe0o0rIJc5zre935l+MjZ0eq1fq9O4gkEQcRU/2FzT8SP2FEAsINdpGbdgAOs5xyBR/H6z+6yi2m52WOeIaWjxTv5D3VfebttPxd9vhwRlDF5BrSJ4HfGewZ66b9M10na7ST3jPmXEub5CCAPVX/i+kmXdm7mCWtB9jOBtyXK+8VR/cp0Q17vA5w7ojDyfIGUfeKp4ewhxFrCR3b+Y32G6e8t9L4/t0U9XjHAZO1jQ8OW8ZnLim9RrtLUkBoBcIDgTcOkco8uarpH6dm4D++XND7yWDMNBBzE7kSUt943gSaILWC2u4f+p0jePTqEDjuoZmpRaWg3Oe2IDDt5yCRyVj0q4iOr+P7QqeyYjWw5cOfjocs/knKNPTHvPbebANy2HdQRt6Z33WFehpy6e1YPIuyP8A5N/f1KyHHK7cvotIBLyWwC2mdgRuSMzCr/Hq7+/Sp0rD4J3gYP1BUe9XA/8Az+P7Vc4PEucWFhnXQbMtdvjtTv4x/kpq+L5IQvJX1+5Rqd1Gp/ZCEChugVqvhapH9P3QhNibPW9VpeBytp/xegQhSmw+tyKG59FSh4x6lCFBU7+Sl/iHqit4vkhCBQNVbVb+wVdTy/xUoRG7FD/AFZn9P3/dCEUHRFLY/wDOSihz9CpQp2qTt9bFGm8XsVWj4x6lCFCnaUHx+5RqPH8kIUptCtq/F/2j9AoqeFvoFKEUDQKangHr+6q3we6lCJs71FHwuVqHP0QhQVB2qun8XsUM8f8A3IQm9Tt7lD/GfUIr+L5KUIg1CtX5eiitsPQoQgUN0Cs7wD1VW/0z6qUIh0VaWzvQfupobn0QhSpdt9bFXT+P2Kk+P3UoUKTr3KlTx/8AcrajxfJCFKDUK2p2HoFrS8I9EIVToqflX//Z)"

document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/games")
    .then(r => r.json())
    .then((object) => {
        console.log(object)
        // 1. select the character div 
        // 2. set the character div to equal the image that you want
        // 3. select the pipes div
        //4. set the pipes div to the image you want
        let character = document.getElementById("character")
        let characterImage = document.createElement("img")
        characterImage.width = 20
        characterImage.height = 20
        characterImage.src = object[0].image
        character.append(characterImage)
        let block = document.getElementById("block")
        let blockImage = document.createElement("img")
        blockImage.width = 50
        blockImage.height = 500
        blockImage.src = object[1].image
        block.append(blockImage)
    })
})

hole.addEventListener('animationiteration', () => {
    const random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
    counter++;
});

setInterval(function() {
    const characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping === 0) {
        character.style.top = (characterTop + 3)+"px";
    }
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    const holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    const cTop = -(500 - characterTop);
    if ((characterTop > 480) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
        // alert("Game Over! Score: " + counter);
        character.style.top = 100 + "px";
        counter = 0;
    }
},10);

function jump() {
    let jumping = 1;
    let jumpCount = 0;
    const jumpInterval = setInterval(function(){
        const characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((characterTop > 6) && (counter < 100000)) {
            character.style.top = (characterTop - 5) + "px";
        }
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 8;
            jumpCount = 0;
        }
        jumpCount++;
    },10);
}





// function fetchScores() {
//     return fetch("http://localhost:3000/scores")
//     .then(response => response.json())
// };
// document.addEventListener('DOMContentLoaded', () => {
//     fetchScores()
//     .then(results => console.log(results))
// });
// function addANewScore(amount) {
//     const scoreId = amount.target.daaset.scoreId;
//     data = {score_id: scoreId}

//     fetch("http://localhost:3000/scores", {
//         method: 'POST',
//         headers:  {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//         },
//         body: JSON.stringify(data)
//     })
// };

